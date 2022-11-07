import React from "react";
import { navigate } from "gatsby";
import type { HeadFC } from "gatsby";
import { Typing, Button } from "components";

const aboutMe =
    "Hello world. I am a fullstack developer based in Utah. I enjoy solving difficult problems and learning new things.";

const IndexPage = () => {
    const viewProjects = () => {
        navigate("/projects");
    };
    return (
        <main className="home-page">
            <div className="container">
                <Typing string={aboutMe} />
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
