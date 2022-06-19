import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { ProjectCard } from "@components";

interface Image {
    localFile: {
        url: string;
    };
}

interface ProjectsPageProps {
    data: {
        allStrapiProject: {
            nodes: {
                applicationLink: string;
                shortDescription: string;
                longDescription: string;
                title: string;
                repositoryLink: string;
                stack: {
                    name: string;
                }[];
                demo: Image;
                screenshots: Image[];
            }[];
        };
    };
}

export default function ({ data }: ProjectsPageProps) {
    const projects = data.allStrapiProject.nodes;

    return (
        <>
            <Helmet title="PJCTech | Projects" />
            <main className="projects-page">
                <h1 className="title">PROJECTS</h1>
                <div className="projects-page__projects">
                    {projects.map((project) => {
                        return (
                            <ProjectCard
                                key={project.title}
                                title={project.title}
                                summary={project.shortDescription}
                                description={project.longDescription}
                                app={project.applicationLink}
                                repo={project.repositoryLink}
                                stack={project.stack.map((tech) => tech.name)}
                                screenshots={project.screenshots.map((img) => img.localFile.url)}
                                demo={project.demo.localFile.url}
                            />
                        );
                    })}
                    {projects.map((project) => {
                        return (
                            <ProjectCard
                                key={project.title}
                                title={project.title}
                                summary={project.shortDescription}
                                description={project.longDescription}
                                app={project.applicationLink}
                                repo={project.repositoryLink}
                                stack={project.stack.map((tech) => tech.name)}
                                screenshots={project.screenshots.map((img) => img.localFile.url)}
                                demo={project.demo.localFile.url}
                            />
                        );
                    })}
                    {projects.map((project) => {
                        return (
                            <ProjectCard
                                key={project.title}
                                title={project.title}
                                summary={project.shortDescription}
                                description={project.longDescription}
                                app={project.applicationLink}
                                repo={project.repositoryLink}
                                stack={project.stack.map((tech) => tech.name)}
                                screenshots={project.screenshots.map((img) => img.localFile.url)}
                                demo={project.demo.localFile.url}
                            />
                        );
                    })}
                    {projects.map((project) => {
                        return (
                            <ProjectCard
                                key={project.title}
                                title={project.title}
                                summary={project.shortDescription}
                                description={project.longDescription}
                                app={project.applicationLink}
                                repo={project.repositoryLink}
                                stack={project.stack.map((tech) => tech.name)}
                                screenshots={project.screenshots.map((img) => img.localFile.url)}
                                demo={project.demo.localFile.url}
                            />
                        );
                    })}
                    {projects.map((project) => {
                        return (
                            <ProjectCard
                                key={project.title}
                                title={project.title}
                                summary={project.shortDescription}
                                description={project.longDescription}
                                app={project.applicationLink}
                                repo={project.repositoryLink}
                                stack={project.stack.map((tech) => tech.name)}
                                screenshots={project.screenshots.map((img) => img.localFile.url)}
                                demo={project.demo.localFile.url}
                            />
                        );
                    })}
                    {projects.map((project) => {
                        return (
                            <ProjectCard
                                key={project.title}
                                title={project.title}
                                summary={project.shortDescription}
                                description={project.longDescription}
                                app={project.applicationLink}
                                repo={project.repositoryLink}
                                stack={project.stack.map((tech) => tech.name)}
                                screenshots={project.screenshots.map((img) => img.localFile.url)}
                                demo={project.demo.localFile.url}
                            />
                        );
                    })}
                </div>
            </main>
        </>
    );
}

export const data = graphql`
    {
        allStrapiProject {
            nodes {
                applicationLink
                shortDescription
                longDescription
                title
                repositoryLink
                stack {
                    name
                }
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
