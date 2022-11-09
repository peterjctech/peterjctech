import React from "react";
import { graphql } from "gatsby";
import type { HeadFC } from "gatsby";
import { Screen } from "components";

interface HomePageProps {
    data: {
        allStrapiContent: {
            nodes: {
                about: string;
            }[];
        };
    };
}

const IndexPage = ({ data }: HomePageProps) => {
    return (
        <main className="home-page">
            <h1 className="title">HOME</h1>
            <Screen string={data.allStrapiContent.nodes[0].about} />
        </main>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>PJCTech | Home</title>;

export const data = graphql`
    {
        allStrapiContent {
            nodes {
                about
            }
        }
    }
`;
