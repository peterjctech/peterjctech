import React from "react";
import { graphql, navigate } from "gatsby";
import type { HeadFC } from "gatsby";
import { Typing, Button } from "components";

const aboutMe = "Hello World.";

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
    const viewProjects = () => {
        navigate("/projects");
    };
    return (
        <main className="home-page">
            <div className="container">
                <Typing string={data.allStrapiContent.nodes[0].about} />
                <footer>
                    <Button click={viewProjects} variant="primary">
                        View Projects
                    </Button>
                </footer>
            </div>
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
