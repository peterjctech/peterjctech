import React from "react";
import { graphql, HeadFC } from "gatsby";
import { Project } from "components";

interface ProjectsPageProps {
    data: {
        allStrapiProject: {
            nodes: {
                name: string;
                description: string;
                summary: string;
                github: string;
                link: string;
                screenshots: {
                    localFile: {
                        url: string;
                    };
                }[];
                demo: {
                    localFile: {
                        url: string;
                    };
                };
            }[];
        };
    };
}

const ProjectsPage = ({ data }: ProjectsPageProps) => {
    console.log(data.allStrapiProject.nodes);
    return (
        <main>
            {data.allStrapiProject.nodes.map((node) => {
                return (
                    <Project
                        name={node.name}
                        description={node.description}
                        summary={node.summary}
                        github={node.github}
                        link={node.link}
                        screenshots={node.screenshots.map((s) => s.localFile.url)}
                        demo={node.demo.localFile.url}
                        key={node.name}
                    />
                );
            })}
        </main>
    );
};

export default ProjectsPage;

export const Head: HeadFC = () => <title>PJCTech | Projects</title>;

export const data = graphql`
    query {
        allStrapiProject {
            nodes {
                name
                description
                summary
                github
                link
                screenshots {
                    localFile {
                        url
                    }
                }
                demo {
                    localFile {
                        url
                    }
                }
            }
        }
    }
`;
