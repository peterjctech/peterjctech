import React from "react";
import { Logo } from "components";
import { useLocation } from "@reach/router";

interface NavbarProps {
    state: string;
    route: (path: string) => void;
}

const Navbar = ({ state, route }: NavbarProps) => {
    const location = useLocation();
    const link = (title: string, path: string) => {
        return (
            <h1 onClick={() => route(path)} className={`navbar__link${location.pathname === path ? " active" : ""}`}>
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
