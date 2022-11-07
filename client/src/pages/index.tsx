import React from "react";
import { navigate } from "gatsby";
import type { HeadFC } from "gatsby";
import { Typing, Button } from "components";

const IndexPage = () => {
    const viewProjects = () => {
        navigate("/projects");
    };
    return (
        <main className="home-page">
            <div className="container">
                <Typing string="" />
                <footer>
                    <Button click={viewProjects} variant="primary">
                        View Projects
                    </Button>
                </footer>
            </div>
        </main>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>PJCTech | Home</title>;
