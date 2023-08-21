import React from "react";
import Layout from "./src/Layout";

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};
