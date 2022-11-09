import React, { useContext } from "react";
import { Logo } from "components";
import { useLocation } from "@reach/router";
import { AssembleContext } from "context";

interface NavbarProps {
    state: string;
    route: (path: string) => void;
}

const Navbar = ({ state }: NavbarProps) => {
    const location = useLocation();
    const disassembleTo = useContext(AssembleContext);

    const link = (title: string, path: string) => {
        return (
            <h1
                onClick={() => disassembleTo(path)}
                className={`navbar__link${location.pathname === path ? " active" : ""}`}
            >
                {title}
            </h1>
        );
    };

    return (
        <nav className={`navbar ${state}`}>
            <Logo />
            <div className="navbar__links">
                {link("PROJECTS", "/projects")}
                {link("CONTACT", "/contact")}
            </div>
        </nav>
    );
};

export default Navbar;
