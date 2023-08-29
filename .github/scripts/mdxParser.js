const fs = require("fs");
const path = require("path");
const grayMatter = require("gray-matter");

function mdxParser(filePath) {
    const mdxFilePath = path.join(__dirname, filePath);
    const mdxContent = fs.readFileSync(mdxFilePath, "utf-8");
    const { data: frontmatter } = grayMatter(mdxContent);

    return frontmatter;
}

module.exports = mdxParser;
