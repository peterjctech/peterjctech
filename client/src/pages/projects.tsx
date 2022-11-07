import React from "react";
import { HeadFC, Link } from "gatsby";

const ProjectsPage = () => {
    return (
        <main className="projects-page">
            <h1>
                Projects page coming soon. In the meantime, please visit my{" "}
                <a href="https://www.github.com/peterjctech" target="__blank">
                    Github
                </a>{" "}
                to view my work or <Link to="/contact">Contact</Link> me
            </h1>
        </main>
    );
};

export default ProjectsPage;

export const Head: HeadFC = () => <title>PJCTech | Projects</title>;
