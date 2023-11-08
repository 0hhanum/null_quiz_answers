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
      <html data-theme="dark" />
      <title>
        {title
          ? `${title} | ${titleQueryResponse?.site?.siteMetadata?.title}`
          : titleQueryResponse?.site?.siteMetadata?.title}
      </title>
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={makeAssetPath("/images/favicon.ico")}
      ></link>
    </>
  );
}
