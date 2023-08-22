import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import Helmet from "../components/Helmet";

const NotFoundPage: React.FC<PageProps> = () => {
    return <h1>Page not found</h1>;
};

export default NotFoundPage;
export const Head: HeadFC = () => <Helmet title="404" />;
