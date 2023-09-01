const fs = require("fs");
const grayMatter = require("gray-matter");

function mdxParser(filePath) {
    const mdxContent = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatter } = grayMatter(mdxContent);

    return frontmatter;
}

module.exports = mdxParser;
