import React from "react";
import { PageProps, HeadFC } from "gatsby";
import Helmet from "../components/Helmet";
import { styled } from "styled-components";

const Container = styled.div`
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const IndexPage: React.FC<PageProps> = () => {
    return <Container>Welcome to the answer hub of null.</Container>;
};

export default IndexPage;
export const Head: HeadFC = () => <Helmet />;
