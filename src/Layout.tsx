import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";

const Layout: React.FC<any> = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    );
};

export default Layout;
