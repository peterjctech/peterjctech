import React, { useState } from "react";
import { HeadFC, graphql } from "gatsby";
import Project from "../components/Project";
import Carousel from "../components/Carousel";
import ProjectDetails from "../components/ProjectDetails";

interface ProjectsPageProps {
    data: {
        allStrapiProject: {
            nodes: {
                name: string;
                summary: string;
                description: string;
                repo: string;
                liveDemo: string;
                preview: string;
                screenshots: { internal: { content: string } };
            }[];
        };
        allStrapiContent: { nodes: { githubIcon: string }[] };
    };
}

const ProjectsPage = ({ data }: ProjectsPageProps) => {
    const [carousel, setCarousel] = useState<null | number>(null);
    const [details, setDetails] = useState<null | number>(null);
    const icon = data.allStrapiContent.nodes[0].githubIcon;

    const showCarousel = (index: number) => {
        setDetails(null);
        setCarousel(index - 1);
    };
    const showDetails = (index: number) => {
        setCarousel(null);
        setDetails(index - 1);
    };

    let carouselProps = null;
    let detailProps = null;
    const cData = carousel !== null ? data.allStrapiProject.nodes[carousel] : null;
    const dData = details !== null ? data.allStrapiProject.nodes[details] : null;

    if (cData) {
        carouselProps = {
            screenshots: JSON.parse(cData.screenshots.internal.content),
            closeCarousel: () => setCarousel(null),
        };
    }
    if (dData) {
        detailProps = {
            name: dData.name,
            description: dData.description,
            repo: dData.repo,
            liveDemo: dData.liveDemo,
            preview: dData.preview,
            icon,
            closeDetails: () => setDetails(null),
        };
    }

    return (
        <main className="projects-page">
            <h1 className="title">PROJECTS</h1>
            {carouselProps && <Carousel {...carouselProps} />}
            {detailProps && <ProjectDetails {...detailProps} />}
            <div className="projects">
                {data.allStrapiProject.nodes.map((project, index) => {
                    const screenshots = JSON.parse(project.screenshots.internal.content);
                    return (
                        <Project
                            key={project.name}
                            name={project.name}
                            summary={project.summary}
                            repo={project.repo}
                            liveDemo={project.liveDemo}
                            screenshots={screenshots}
                            pindex={index + 1}
                            icon={icon}
                            showCarousel={showCarousel}
                            showDetails={showDetails}
                        />
                    );
                })}
            </div>
        </main>
    );
};

export default ProjectsPage;

export const Head: HeadFC = () => <title>PJCTech | Projects</title>;

export const data = graphql`
    query {
        allStrapiProject(sort: { fields: createdAt }) {
            nodes {
                name
                summary
                description
                repo
                liveDemo
                preview
                screenshots {
                    internal {
                        content
                    }
                }
            }
        }
        allStrapiContent {
            nodes {
                githubIcon
            }
        }
    }
`;
