import React, { useState } from "react";
import { BsChevronDoubleRight, BsInfoCircleFill } from "react-icons/bs";

interface ProjectProps {
    name: string;
    summary: string;
    repo: string;
    liveDemo: string;
    screenshots: string[];
    pindex: number;
    icon: string;
    showCarousel: (index: number) => void;
    showDetails: (index: number) => void;
}

const Project = (props: ProjectProps) => {
    const { screenshots, showCarousel, showDetails, repo, summary, name, icon, pindex, liveDemo } = props;
    const [scrnIndex, setScrnIndex] = useState(0);
    const [className, setClassName] = useState("");

    const getRandomIndex = () => {
        const num = Math.floor(screenshots.length * Math.random());
        if (num !== scrnIndex) return num;
        if (num > 0) return 0;
        return 1;
    };

    const handleHover = () => {
        setClassName("fade-out");
        setTimeout(() => {
            setScrnIndex(getRandomIndex());
            setClassName("fade-in");
        }, 200);
        setTimeout(() => {
            setClassName("");
        }, 400);
    };

    return (
        <div className={`project pindex-${pindex}`}>
            <img
                src={screenshots[scrnIndex]}
                onClick={() => showCarousel(pindex)}
                onMouseEnter={handleHover}
                className={className}
            />
            <div className="project__content">
                <header>
                    <h6>{name}</h6>
                    <a href={liveDemo} target="_blank">
                        <BsChevronDoubleRight />
                    </a>
                </header>
                <section>
                    <p>{summary}</p>
                </section>
                <footer>
                    <BsInfoCircleFill onClick={() => showDetails(pindex)} />
                    <a href={repo} target="__blank">
                        <img src={icon} />
                    </a>
                </footer>
            </div>
        </div>
    );
};

export default Project;
