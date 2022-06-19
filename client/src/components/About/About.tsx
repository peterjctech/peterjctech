import React from "react";

interface AboutProps {
    text: string;
}

export default function ({ text }: AboutProps) {
    return (
        <div className="about container">
            <h1>{text}</h1>
        </div>
    );
}
