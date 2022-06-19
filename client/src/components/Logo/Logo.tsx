import React from "react";

interface LogoProps {
    route: (path: string) => void;
}

export default function ({ route }: LogoProps) {
    return (
        <svg onClick={() => route("/")} viewBox="0 0 100 100" className="logo">
            <ellipse className="logo__border" />
            <ellipse className="logo__background" />
        </svg>
    );
}
