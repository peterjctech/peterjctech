import React, { useState } from "react";
import { HeadFC, graphql } from "gatsby";
import Project from "../components/Project";
import Carousel from "../components/Carousel";
import { Details } from "components";

interface ProjectsPageProps {
    data: {
        allStrapiProject: {
            nodes: {
                briefSummary: string;
                description: string;
                liveDemo: string;
                preview: string;
                title: string;
                thoughts: string;
                repo: string;
                screenshots: {
                    image: string;
                    caption: string;
                }[];
            }[];
        };
    };
}

const ProjectsPage = ({ data }: ProjectsPageProps) => {
    const [carousel, setCarousel] = useState<null | number>(null);
    const [details, setDetails] = useState<null | number>(null);

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
            screenshots: cData.screenshots,
            closeCarousel: () => setCarousel(null),
        };
    }
    if (dData) {
        detailProps = {
            title: dData.title,
            description: dData.description,
            thoughts: dData.thoughts,
            repo: dData.repo,
            liveDemo: dData.liveDemo,
            preview: dData.preview,
            closeDetails: () => setDetails(null),
        };
    }

    return (
        <main className="projects-page">
            <h1 className="title">PROJECTS</h1>
            {carouselProps && <Carousel {...carouselProps} />}
            {detailProps && <Details {...detailProps} />}

            <div className="projects">
                {data.allStrapiProject.nodes.map((project, index) => {
                    const screenshots = project.screenshots.map((obj) => obj.image);
                    return (
                        <Project
                            key={project.title}
                            title={project.title}
                            summary={project.briefSummary}
                            repo={project.repo}
                            liveDemo={project.liveDemo}
                            screenshots={screenshots}
                            pindex={index + 1}
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
        allStrapiProject {
            nodes {
                briefSummary
                description
                liveDemo
                preview
                title
                thoughts
                repo
                screenshots {
                    image
                    caption
                }
            }
        }
    }
`;
