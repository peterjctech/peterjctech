import * as React from "react";
import type { HeadFC } from "gatsby";

const IndexPage = () => {
    return (
        <main>
            <h1 className="hello">Hello World</h1>
        </main>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>PJCTech | Home</title>;
