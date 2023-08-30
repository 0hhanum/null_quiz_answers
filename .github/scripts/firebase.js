const changedMdxFilePaths = process.env.CHANGED_FILES
    ? process.env.CHANGED_FILES.split(" ")
          .filter((fileName) => {
              return Boolean(fileName) && fileName.includes(".mdx");
          })
          .map((fileName) => fileName.replace('"', ""))
    : [];
const mdxParser = require("./mdxParser");
const dotenv = require("dotenv");
dotenv.config();

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

const updateQuizData = async (mdxFilePath) => {
    const { title, tags, question, questionType, choices, answer, slug } =
        mdxParser(mdxFilePath);
    await quizRef.child(slug).set({
        title,
        tags,
        question,
        questionType,
        choices,
        answer,
    });
};

(async () => {
    try {
        const updatePromises = changedMdxFilePaths.map(updateQuizData);
        await Promise.all(updatePromises);
        console.log("All updates completed.");
    } catch (error) {
        console.error("An error occurred:", error);
    }
})();
