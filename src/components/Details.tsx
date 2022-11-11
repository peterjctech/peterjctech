import React from "react";

interface ProjectDetailsProps {
    title: string;
    description: string;
    thoughts: string;
    repo: string;
    liveDemo: string;
    preview: string;
    closeDetails: () => void;
}

const ProjectDetails = (props: ProjectDetailsProps) => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if ((event.target as HTMLDivElement).className === "details") props.closeDetails();
    };

    return <div onClick={handleClick} className="details"></div>;
};

export default ProjectDetails;
