import React, { useState } from "react";
import { BsChevronDoubleRight, BsInfoCircleFill } from "react-icons/bs";

interface ProjectProps {
    title: string;
    summary: string;
    repo: string;
    liveDemo: string;
    screenshots: string[];
    pindex: number;
    showCarousel: (index: number) => void;
    showDetails: (index: number) => void;
}

const Project = (props: ProjectProps) => {
    const { screenshots, showCarousel, showDetails, repo, summary, title, pindex, liveDemo } = props;
    const [scrnIndex, setScrnIndex] = useState(0);
    const [className, setClassName] = useState("");

    const getRandomIndex = () => {
        const num = Math.floor(screenshots.length * Math.random());
        if (num !== scrnIndex) return num;
        if (num > 0) return 0;
        return 1;
    };

    const handleHover = () => {
        if (screenshots.length > 1) {
            setClassName("fade-out");
            setTimeout(() => {
                setScrnIndex(getRandomIndex());
                setClassName("fade-in");
            }, 200);
            setTimeout(() => {
                setClassName("");
            }, 400);
        } else {
            setClassName("fade-out");
            setTimeout(() => {
                setClassName("fade-in");
            }, 200);
            setTimeout(() => {
                setClassName("");
            }, 400);
        }
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
                    <h6>{title}</h6>
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
                        <img src="https://storage.googleapis.com/peterjctech-api.appspot.com/thumbnail_Github_f7a98506e1.jpg" />
                    </a>
                </footer>
            </div>
        </div>
    );
};

export default Project;
