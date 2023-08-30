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
// console.log(process.env.FIREBASE_CERTIFICATION_PATH);
const path = require("path");

const firebaseCertification = require(path.join(
    __dirname,
    "../../../credential.json"
));
admin.initializeApp({
    credential: admin.credential.cert(firebaseCertification),
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
