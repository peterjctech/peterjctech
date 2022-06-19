import React from "react";

interface NavbarTogglerProps {
    navbarState: string;
    toggleMenu: () => void;
}

export default function ({ navbarState, toggleMenu }: NavbarTogglerProps) {
    return (
        <svg
            viewBox="0 0 100 100"
            onClick={toggleMenu}
            className={`navbar-toggler ${navbarState === "visible" ? "toggled" : ""}`}
        >
            <rect className="navbar-toggler__top" />
            <rect className="navbar-toggler__middle" />
            <rect className="navbar-toggler__bottom" />
        </svg>
    );
}
