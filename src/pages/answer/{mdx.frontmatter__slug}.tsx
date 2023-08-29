import React, { useEffect } from "react";
import { PageProps, graphql } from "gatsby";
import Helmet from "../../components/Helmet";
import { styled } from "styled-components";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

const Container = styled.div.attrs({ className: "container" })`
    margin-top: 15%;
`;
const FlexEndContainer = styled.div`
    display: flex;
    justify-content: end;
`;
hljs.registerLanguage("javascript", javascript);

const Content = ({
    children,
    data: { mdx },
}: PageProps<Queries.getContentDetailQuery>) => {
    const { title, date, tags, relatedLinks } = mdx!.frontmatter!;
    useEffect(() => {
        hljs.highlightAll();
    }, []);
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/highlight.js@10.7.2/styles/github.min.css"
            />
            <Container>
                <h1>{title}</h1>
                <div>
                    <i>About </i>
                    {tags?.map((tag, idx) => (
                        <i key={idx}>
                            {tag}
                            {idx !== tags.length - 1 && ", "}
                        </i>
                    ))}
                </div>
                <FlexEndContainer>
                    <i>{date}</i>
                </FlexEndContainer>
                <hr />
            </Container>
            <Container>
                <section>{children}</section>
            </Container>
            <article>
                <h3>더 알아보려면?</h3>
                <ul>
                    {relatedLinks?.map((link, idx) => (
                        <li key={idx}>
                            <a href={link || "#"}>{link}</a>
                        </li>
                    ))}
                </ul>
            </article>
            <FlexEndContainer>
                <a
                    href={`https://github.com/0hhanum/null_quiz_answers/issues/new?title=${title} 수정 요청&body=잘못된 정보를 고쳐주시면 기프티콘을 드려요 :)`}
                >
                    <p>잘못된 정보가 있나요?</p>
                </a>
            </FlexEndContainer>
        </>
    );
};

export default Content;
export const Head = ({ data }: PageProps<Queries.getContentDetailQuery>) => (
    <Helmet title={data.mdx?.frontmatter?.title || ""} />
);

export const query = graphql`
    query getContentDetail($frontmatter__slug: String!) {
        mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
            id
            frontmatter {
                title
                date(formatString: "YYYY/MM/DD")
                tags
                relatedLinks
            }
        }
    }
`;
