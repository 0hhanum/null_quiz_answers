import React from "react";
import Header from "./components/Header";

const Layout: React.FC<any> = ({ children }) => {
    return (
        <div>
            <main className="container">
                <Header />
                <section>{children}</section>
            </main>
        </div>
    );
};

export default Layout;
