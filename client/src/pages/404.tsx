import React from "react";
import { Helmet } from "react-helmet";

export default function () {
    return (
        <>
            <Helmet title="PJCTech | 404" />
            <main className="error-page">
                <h1 className="title">ERROR</h1>
            </main>
        </>
    );
}
