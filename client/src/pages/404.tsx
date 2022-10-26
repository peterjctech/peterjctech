import * as React from "react";
import { HeadFC } from "gatsby";

const NotFoundPage = () => {
    return (
        <main>
            <h1>Error</h1>
        </main>
    );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>PJCTech | 404</title>;
