import React from "react";

interface ProjectProps {
    name: string;
    description: string;
    summary: string;
    github: string;
    link: string;
    screenshots: string[];
    demo: string;
}

const Project = (props: ProjectProps) => {
    return (
        <div className="project">
            <h1>Project</h1>
        </div>
    );
};

export default Project;
