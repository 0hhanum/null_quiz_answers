import React, { Suspense } from "react";
import { styled } from "styled-components";
import { makeAssetPath } from "../utils";

const Nav = styled.section``;
const Img = styled.img`
    width: 35%;
    margin-top: 10px;
`;
const Header = () => {
    return (
        <Nav>
            <nav>
                <Suspense fallback={null}>
                    <Img src={makeAssetPath("/images/logo.svg")} />
                </Suspense>
            </nav>
        </Nav>
    );
};

export default Header;
