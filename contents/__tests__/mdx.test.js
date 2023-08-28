const fs = require("fs");
const path = require("path");
const matter = require("gray-matter"); // For parsing frontmatter
const { describe, test } = require("@jest/globals");

const BASE_DIR = path.join(__dirname, "../");
const QUESTION_TYPES = ["객관식", "주관식", "OX"];
const 객관식_보기_개수 = 4;

// Utility function to read MDX files and parse frontmatter
const readMdxFile = (filePath) => {
    const content = fs.readFileSync(filePath, "utf-8");
    const { content: mdxContent, data: frontmatter } = matter(content);
    return { mdxContent, frontmatter };
};

describe("Test MDX files.", () => {
    const categories = fs
        .readdirSync(BASE_DIR, { withFileTypes: true })
        .filter(
            (categoryDirectory) =>
                categoryDirectory.isDirectory() &&
                categoryDirectory.name !== "__tests__"
        )
        .map((categoryDirectory) => categoryDirectory.name);

    categories.forEach((category) => {
        const categoryDir = path.join(BASE_DIR, category);
        const mdxFiles = fs
            .readdirSync(categoryDir)
            .filter((filename) => filename.endsWith(".mdx"));

        mdxFiles.forEach((mdxFile) => {
            test(`Check frontmatter format of ${mdxFile}`, () => {
                const filePath = path.join(categoryDir, mdxFile);
                const { frontmatter } = readMdxFile(filePath);
                // Validate frontmatter structure and properties
                expect(frontmatter).toBeDefined();
                expect(frontmatter.title).toBeDefined();
                expect(frontmatter.date).toBeDefined();
                expect(frontmatter.tags).toBeDefined();
                expect(frontmatter.relatedLinks).toBeDefined();
                expect(frontmatter.question).toBeDefined();
                expect(frontmatter.questionType).toBeDefined();
                expect(QUESTION_TYPES).toContain(frontmatter.questionType);
                expect(frontmatter.answer).toBeDefined();

                if (frontmatter.questionType === "객관식") {
                    expect(frontmatter.choices).toBeDefined();
                    expect(Array.isArray(frontmatter.choices)).toBe(true);
                    expect(frontmatter.choices.length).toBe(객관식_보기_개수);
                }
            });
        });
    });
});
