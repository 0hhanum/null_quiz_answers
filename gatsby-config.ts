import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `null_quiz_answers`,
        siteUrl: `https://0hhanum.github.io/null_quiz_answers`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-plugin-mdx",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "contents",
                path: `${__dirname}/contents`,
            },
            __key: "pages",
        },
    ],
    pathPrefix: "/null_quiz_answers",
};
export default config;
