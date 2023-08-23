import React from "react";
import styled from "styled-components";
import { makeAssetPath } from "./utils";

const Main = styled.main``;
const Nav = styled.section``;
const Img = styled.img`
    width: 35%;
    margin-top: 10px;
`;
const Layout: React.FC<any> = ({ children }) => {
    return (
        <Main className="container">
            <Nav>
                <header>
                    <nav>
                        <Img src={makeAssetPath("/images/logo.svg")} />
                    </nav>
                </header>
            </Nav>
            <section>{children}</section>
        </Main>
    );
};

export default Layout;
