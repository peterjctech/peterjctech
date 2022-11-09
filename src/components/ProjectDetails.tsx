import React from "react";

interface ProjectDetailsProps {
    name: string;
    description: string;
    repo: string;
    liveDemo: string;
    preview: string;
    icon: string;
    closeDetails: () => void;
}

const ProjectDetails = (props: ProjectDetailsProps) => {
    return (
        <div>
            <h1></h1>
        </div>
    );
};

export default ProjectDetails;
