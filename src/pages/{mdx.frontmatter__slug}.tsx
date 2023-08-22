import React from "react";
import { PageProps, graphql } from "gatsby";
import Helmet from "../components/Helmet";
import { styled } from "styled-components";

const Container = styled.div.attrs({ className: "container" })`
    margin-top: 15%;
`;
const DateContainer = styled.div`
    display: flex;
    justify-content: end;
`;
const Content = ({
    children,
    data: { mdx },
}: PageProps<Queries.getContentDetailQuery>) => {
    const { title, date, tags, relatedLinks } = mdx!.frontmatter!;
    return (
        <>
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
                <DateContainer>
                    <i>{date}</i>
                </DateContainer>
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
        </>
    );
};

export default Content;
export const Head = ({ data }: PageProps<Queries.getContentDetailQuery>) => (
    <Helmet title={data.mdx?.frontmatter?.title || ""} />
);

export const query = graphql`
    query getContentDetail($frontmatter__slug: String) {
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
