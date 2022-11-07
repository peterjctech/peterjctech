import React from "react";
import { Logo } from "components";

interface NavbarProps {
    state: string;
    route: (path: string) => void;
}

const Navbar = ({ state, route }: NavbarProps) => {
    const link = (title: string, path: string) => {
        return (
            <h1
                onClick={() => route(path)}
                className={`navbar__link${window.location.pathname === path ? " active" : ""}`}
            >
                {title}
            </h1>
        );
    };

    return (
        <nav className={`navbar ${state}`}>
            <Logo route={route} />
            <div className="navbar__links">
                {link("PROJECTS", "/projects")}
                {link("CONTACT", "/contact")}
            </div>
        </nav>
    );
};

export default Navbar;
