import React from "react";
import { Button } from "@components";

interface ProjectCardProps {
    title: string;
    summary: string;
    description: string;
    app: string;
    repo: string;
    stack: string[];
    demo: string;
    screenshots: string[];
}

export default function ({ title, summary, description, app, repo, stack, demo, screenshots }: ProjectCardProps) {
    return (
        <div className="project-card container">
            <img src={screenshots[0]} />
            <div className="project-card__content">
                <section>
                    <h1 className="project-card__title">{title}</h1>
                    <Button variant="primary" size="sm">
                        More Info
                    </Button>
                </section>
                <section className="project-card__stack">
                    {stack.map((tech) => {
                        return <h3 key={tech}>{tech}</h3>;
                    })}
                </section>
                <section className="project-card__summary">{summary}</section>
                <section>
                    <Button variant="secondary" size="sm">
                        <a href={repo} target="_blank">
                            GitHub Repo
                        </a>
                    </Button>
                    <Button variant="secondary" size="sm">
                        <a href={app} target="_blank">
                            Live Website
                        </a>
                    </Button>
                </section>
            </div>
        </div>
    );
}
