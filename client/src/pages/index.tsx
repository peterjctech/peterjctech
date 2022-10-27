import React from "react";
import { graphql } from "gatsby";
import type { HeadFC } from "gatsby";
import { Typing } from "components";

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
    console.log(data);
    return (
        <main>
            <Typing string={data.allStrapiContent.nodes[0].about} />
        </main>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>PJCTech | Home</title>;

export const data = graphql`
    query {
        allStrapiContent {
            nodes {
                about
            }
        }
    }
`;
