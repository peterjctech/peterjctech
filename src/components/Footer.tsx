import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Footer = () => {
    const data = useStaticQuery(graphql`
        {
            allStrapiSocial {
                nodes {
                    link
                    icon
                }
            }
        }
    `);
    return (
        <footer className="footer">
            {data.allStrapiSocial.nodes.map((node: { link: string; icon: string }) => {
                return (
                    <a href={node.link} target="__blank" key={node.link}>
                        <img src={node.icon} />
                    </a>
                );
            })}
        </footer>
    );
};

export default Footer;
