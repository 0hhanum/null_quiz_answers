import React from "react";
import { PageProps, HeadFC, graphql } from "gatsby";
import Helmet from "../components/Helmet";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;
const MdxList = styled.ul``;
const IndexPage = ({
  data: { allMdx },
}: PageProps<Queries.getAllMdxesQuery>) => {
  return (
    <Container>
      <h1>Welcome to the answer hub of null.</h1>
      <MdxList>
        {allMdx.edges?.map((mdx) => (
          <li key={mdx.node.id}>
            <a href={`answer/${mdx.node.frontmatter?.id!}`}>
              {mdx.node.frontmatter?.title}
            </a>
          </li>
        ))}
      </MdxList>
    </Container>
  );
};

export default IndexPage;
export const Head: HeadFC = () => <Helmet />;
export const query = graphql`
  query getAllMdxes {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            id
          }
        }
      }
    }
  }
`;
