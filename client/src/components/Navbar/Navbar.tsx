import React from "react";
import { NavbarToggler, Logo } from "@components";

interface NavbarProps {
    navbarState: string;
    toggleMenu: () => void;
    route: (path: string) => void;
}

export default function ({ navbarState, toggleMenu, route }: NavbarProps) {
    const location = window.location.pathname.slice(1);

    const link = (title: string, path: string) => {
        return (
            <h1 onClick={() => route(`/${path}`)} className={`navbar__link ${location === path ? "active" : ""}`}>
                {title}
            </h1>
        );
    };

    return (
        <nav className={`navbar ${navbarState}`}>
            <Logo route={route} />
            <div className="navbar__links">
                {link("PROJECTS", "projects")}
                {link("CONTACT", "contact")}
                {link("ERROR", "error")}
            </div>
            <NavbarToggler toggleMenu={toggleMenu} navbarState={navbarState} />
        </nav>
    );
}
