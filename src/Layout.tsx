import React from "react";
import styled from "styled-components";

const Main = styled.main``;
const Layout: React.FC<any> = ({ children }) => {
    return (
        <Main className="container">
            <section>
                <header>
                    <nav>
                        <img
                            src="/images/logo.svg"
                            width="35%"
                            style={{ marginTop: 10 }}
                        />
                    </nav>
                </header>
            </section>
            <section>{children}</section>
        </Main>
    );
};

export default Layout;
