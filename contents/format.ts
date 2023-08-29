// Describe mdx frontmatter type

type questionType = "객관식" | "주관식" | "OX" | "빈칸";
interface IFrontmatter {
    title: string;
    date: Date; // YYYY-MM-DD (gatsby automately changes date object)
    tags: string[];
    relatedLinks: string[];
    question: string[];
    questionType: questionType;
    choices?: string[] | string[][]; // 객관식 | 빈칸
    answer: string[];
}
