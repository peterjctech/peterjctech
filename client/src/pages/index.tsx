import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { About, Technologies } from "@components";

interface HomePageProps {
    data: {
        allStrapiContent: {
            nodes: {
                about: string;
                technologies: {
                    name: string;
                    icon: string;
                }[];
            }[];
        };
    };
}

export default function ({ data }: HomePageProps) {
    const { about, technologies } = data.allStrapiContent.nodes[0];

    return (
        <>
            <Helmet title="PJCTech | Home" />
            <main className="home-page">
                <h1 className="title">HOME</h1>
                <About text={about} />
                <Technologies tech={technologies} />
            </main>
        </>
    );
}

export const data = graphql`
    {
        allStrapiContent {
            nodes {
                about
                technologies {
                    name
                    icon
                }
            }
        }
    }
`;
