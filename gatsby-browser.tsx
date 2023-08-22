import React from "react";
import Layout from "./src/Layout";
import "@picocss/pico";

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};
