export const makeAssetPath = (path: string) => {
    const BASE_URL = "https://0hhanum.github.io/null_quiz_answers";
    return process.env.NODE_ENV === "development" ? path : BASE_URL + path;
};
