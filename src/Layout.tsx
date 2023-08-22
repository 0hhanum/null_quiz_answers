import React from "react";
import styled from "styled-components";

const Main = styled.main``;
const Layout: React.FC<any> = ({ children }) => {
    return <Main className="container">{children}</Main>;
};

export default Layout;
