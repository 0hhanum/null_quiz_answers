const fs = require("fs");
const path = require("path");
const matter = require("gray-matter"); // For parsing frontmatter
const { describe, test } = require("@jest/globals");

const BASE_DIR = path.join(__dirname, "../");
const QUESTION_TYPES = ["객관식", "주관식", "OX", "빈칸"];
const 객관식_보기_개수 = 4;

// Utility function to read MDX files and parse frontmatter
const readMdxFile = (filePath) => {
    const content = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatter } = matter(content);
    return { frontmatter };
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

                expect(typeof frontmatter.title).toBe("string");
                expect(typeof frontmatter.date).toBe("object");
                expect(Array.isArray(frontmatter.tags)).toBe(true);
                expect(Array.isArray(frontmatter.relatedLinks)).toBe(true);
                expect(Array.isArray(frontmatter.question)).toBe(true);
                expect(QUESTION_TYPES).toContain(frontmatter.questionType);
                expect(Array.isArray(frontmatter.answer)).toBe(true);
                expect(typeof frontmatter.slug).toBe("string");
                expect(/\s/.test(frontmatter.slug)).toBe(false); // Check for whitespace

                if (frontmatter.questionType === "객관식") {
                    expect(frontmatter.choices).toBeDefined();
                    expect(Array.isArray(frontmatter.choices)).toBe(true);
                    expect(frontmatter.choices.length).toBe(객관식_보기_개수);
                } else if (frontmatter.questionType === "빈칸") {
                    expect(Array.isArray(frontmatter.choices)).toBe(true);
                    frontmatter.choices.forEach((choice) => {
                        expect(Array.isArray(choice)).toBe(true);
                        expect(choice.length).toBe(객관식_보기_개수);
                    });
                }
            });
        });
    });
});
