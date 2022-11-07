import React from "react";
import { graphql, HeadFC, Link } from "gatsby";
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
    return (
        <main className="projects-page">
            <h1>
                Projects page coming soon. In the meantime, please visit my{" "}
                <a href="https://www.github.com/peterjctech" target="__blank">
                    Github
                </a>{" "}
                to view my work or <Link to="/contact">Contact</Link> me
            </h1>
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
