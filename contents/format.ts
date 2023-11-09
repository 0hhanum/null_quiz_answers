// Describe mdx frontmatter type

type questionType = "객관식" | "주관식" | "OX" | "빈칸";
type category = "dev" | "fe" | "react" | "js" | "ts";

interface IFrontmatter {
  id: string;
  title: string;
  date: Date; // YYYY-MM-DD (gatsby automately changes date object)
  tags: string[];
  relatedLinks: string[];
  question: string[];
  questionType: questionType;
  choices?: string[] | string[][]; // 객관식 | 빈칸
  answer: string[];
  level: number; // 1, 2, 3, 4, 5
  category: category;
  description: string;
}
