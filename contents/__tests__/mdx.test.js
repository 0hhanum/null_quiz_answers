const fs = require("fs");
const path = require("path");
const matter = require("gray-matter"); // For parsing frontmatter
const { describe, test } = require("@jest/globals");

const BASE_DIR = path.join(__dirname, "../");
const QUESTION_TYPES = ["객관식", "주관식", "OX", "빈칸"];
const 객관식_보기_개수 = [2, 4];
const CATEGORIES = ["js", "ts", "fe", "cs", "react"];

// Utility function to read MDX files and parse frontmatter
const readMdxFile = (filePath) => {
  const content = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter } = matter(content);
  return { frontmatter };
};

// custom test function
expect.extend({
  toBeOneOf(received, values) {
    const pass = values.includes(received);
    if (pass) {
      return {
        message: () =>
          `expected ${received} to be one of [${values.join(", ")}]`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} not to be one of [${values.join(", ")}]`,
        pass: false,
      };
    }
  },
});

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
        expect(typeof frontmatter.level).toBe("number");
        expect(frontmatter.level >= 1 && frontmatter.level <= 5).toBe(true);

        const assertArray = (arr, expectedLengths) => {
          expect(Array.isArray(arr)).toBe(true);
          expect(arr.length).toBeOneOf(expectedLengths);
        };

        if (frontmatter.questionType === "객관식") {
          assertArray(frontmatter.choices, 객관식_보기_개수);
        } else if (frontmatter.questionType === "빈칸") {
          // 빈칸 여러 개 나오는 케이스 (순차적)
          expect(Array.isArray(frontmatter.choices)).toBe(true);
          frontmatter.choices.forEach((choice) => {
            assertArray(choice, 객관식_보기_개수);
          });
        }
        expect(typeof frontmatter.category).toBe("string");
        expect(frontmatter.category).toBeOneOf(CATEGORIES);
      });
    });
  });
});
