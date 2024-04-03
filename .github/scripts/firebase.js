const mdxParser = require("./mdxParser");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
dotenv.config();
const changedMdxFilePaths = process.env.CHANGED_FILES
  ? process.env.CHANGED_FILES.split(" ")
      .filter((fileName) => {
        return Boolean(fileName) && fileName.includes(".mdx");
      })
      .map((fileName) => "../../" + fileName.replace('"', ""))
  : [];
const admin = require("firebase-admin");
const credential = {
  type: "service_account",
  project_id: process.env.PROJECT_ID,
  universe_domain: "googleapis.com",
  private_key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
  private_key_id: process.env.PRIVATE_KEY_ID,
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKEN_URI,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
};
admin.initializeApp({
  credential: admin.credential.cert(credential),
  databaseURL: process.env.FIREBASE_DB_PATH,
});

const db = admin.database();
const quizRef = db.ref("quiz");
const quizCategoryRef = db.ref("quizCategory");
const userRef = db.ref("users");

const parseQuizData = (mdxFilePath) => {
  const absoluteMdxPath = path.join(__dirname, mdxFilePath);
  try {
    if (fs.existsSync(absoluteMdxPath)) {
      const quiz = mdxParser(absoluteMdxPath);
      return quiz;
    }
  } catch (e) {
    console.error("Something went wrong when parse mdx", e);
  }
};

const updateQuizData = async (quiz) => {
  if (!quiz) return;
  const {
    id,
    title,
    tags,
    question,
    questionType,
    choices,
    answer,
    category,
    level,
    description,
  } = quiz;
  try {
    await quizRef.child(id).set({
      id,
      title,
      tags,
      question,
      questionType,
      answer,
      choices: choices || null,
      level,
      category,
      description,
    });
    await quizCategoryRef.child(category).update({
      [id]: true,
    });
  } catch (e) {
    console.error(e);
  }
};

const fetchUsers = async () => {
  const snapshot = await userRef.once("value");
  if (!snapshot.exists()) {
    throw new Error("NO USERS");
  }
  const users = snapshot.val();
  return users;
};

const sendNotification = async (quizId, category) => {
  const notificationTitle = "새로운 퀴즈가 추가되었어요.";
  const notificationSubtitle = "풀어볼까요?";
  const notificationServerURL = "https://exp.host/--/api/v2/push/send";
  const users = Object.values(await fetchUsers());
  const expoTokens = users
    .map((user) => user.expoNotificationToken)
    .filter((token) => token !== undefined);

  // Split users into batches of 100 for Expo push notification limit
  const expoTokenBatches = [];
  while (expoTokens.length > 0) {
    expoTokenBatches.push(expoTokens.splice(0, 100));
  }

  for (const tokens of expoTokenBatches) {
    await fetch(notificationServerURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      data: {
        to: tokens,
        sound: "default",
        title: notificationTitle,
        body: notificationSubtitle,
        data: { quizId, category },
      },
    }).then(() => {
      console.log("Push notification sent successfully.");
    });
  }
};

(async () => {
  const quizzes = changedMdxFilePaths.map(parseQuizData);
  try {
    const promisesOfUpdateQuiz = quizzes.map(updateQuizData);
    await Promise.all(promisesOfUpdateQuiz);
    console.log("All updates completed.");
  } catch (error) {
    console.error(
      "Something went wrong when update firebase quiz data:",
      error
    );
    process.exit(1);
  }

  try {
    if (quizzes.length !== 0) {
      // TODO:: notificate & indicate in App when more than 2 quiz changes
      await sendNotification(quizzes[0].id, quizzes[0].category);
    }
  } catch (error) {
    console.error("Something went wrong when send push notification", error);
    process.exit(1);
  }
  process.exit(0);
})();
