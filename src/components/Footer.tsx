import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Footer = () => {
    const data = useStaticQuery(graphql`
        {
            allStrapiContent {
                nodes {
                    github
                    githubIcon
                }
            }
        }
    `);
    const { github, githubIcon } = data.allStrapiContent.nodes[0];

    return (
        <footer className="footer">
            <a href={github} target="__blank">
                <img src={githubIcon} />
            </a>
        </footer>
    );
};

export default Footer;
