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

// check isArray & length of array
const assertArray = (arr, expectedLengths) => {
  expect(Array.isArray(arr)).toBe(true);
  expect(arr.length).toBeOneOf(expectedLengths);
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
        const {
          id,
          title,
          date,
          tags,
          relatedLinks,
          question,
          questionType,
          answer,
          slug,
          level,
          category,
          choices,
        } = frontmatter;
        expect(typeof id).toBe("string");
        // title
        expect(typeof title).toBe("string");
        // date
        expect(typeof date).toBe("object");
        // tags
        expect(Array.isArray(tags)).toBe(true);
        // relatedLinks
        expect(Array.isArray(relatedLinks)).toBe(true);
        // question
        expect(Array.isArray(question)).toBe(true);
        // questionType
        expect(QUESTION_TYPES).toContain(questionType);
        // answer
        expect(Array.isArray(answer)).toBe(true);
        // slug
        expect(typeof slug).toBe("string");
        expect(/\s/.test(slug)).toBe(false); // Check for whitespace
        // level
        expect(typeof level).toBe("number");
        expect(level >= 1 && level <= 5).toBe(true);
        // choices
        if (questionType === "객관식") {
          assertArray(choices, 객관식_보기_개수);
        } else if (questionType === "빈칸") {
          // 빈칸 여러 개 나오는 케이스 (순차적)
          expect(Array.isArray(choices)).toBe(true);
          choices.forEach((choice) => {
            assertArray(choice, 객관식_보기_개수);
          });
        }
        // category
        expect(typeof category).toBe("string");
        expect(category).toBeOneOf(CATEGORIES);
      });
    });
  });
});
