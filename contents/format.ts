// Describe mdx frontmatter type

type questionType = "객관식" | "주관식" | "OX";
interface IFrontmatter {
    title: string;
    date: string; // YYYY-MM-DD
    tags: string[];
    relatedLinks: string[];
    question: string;
    questionType: questionType;
    choices?: string[]; // only for 객관식
    answer: string;
}
