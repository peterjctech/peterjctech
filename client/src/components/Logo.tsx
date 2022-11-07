import React from "react";

interface LogoProps {
    route: (path: string) => void;
}

const Logo = ({ route }: LogoProps) => {
    return (
        <svg onClick={() => route("/")} viewBox="0 0 84 84" className="logo">
            <path className="logo__p" d="M 0 54 L 30 4 L 70 4 L 52 34 L 22 34 L 10 54 L 0 54" />
            <path className="logo__p2" d="M 34 14 L 54 14 L 48 24 L 28 24 L 34 14" />
            <path
                className="logo__j"
                d="M 37 17 L 77 17 L 47 67 L 7 67 L 19 47 L 29 47 L 23 57 L 43 57 L 61 27 L 31 27 L 37 17"
            />
            <path
                className="logo__c"
                d="M 44 30 L 84 30 L 72 50 L 62 50 L 68 40 L 48 40 L 30 70 L 50 70 L 56 60 L 66 60 L 54 80 L 14 80 L 44 30"
            />
        </svg>
    );
};

export default Logo;
