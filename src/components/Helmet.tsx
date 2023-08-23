import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { makeAssetPath } from "../utils";

interface IHelmet {
    title?: string;
}
export default function Helmet({ title }: IHelmet) {
    const titleQueryResponse = useStaticQuery<Queries.getTitleQuery>(graphql`
        query getTitle {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    return (
        <>
            <title>
                {title ? `${title} | ` : ""}
                {titleQueryResponse?.site?.siteMetadata?.title}
            </title>
            <link
                rel="shortcut icon"
                type="image/svg+xml"
                href={makeAssetPath("/images/favicon.ico")}
            ></link>
        </>
    );
}
