import React, { useState } from "react";
import { Navbar } from "@components";
import { navigate } from "gatsby-link";

type LayoutProps = {
    children: JSX.Element;
};

export default function ({ children }: LayoutProps) {
    const [navbarState, setNavbarState] = useState("");

    const toggleMenu = () => {
        if (navbarState === "visible") {
            setNavbarState("hidden");
        } else {
            setNavbarState("visible");
        }
    };

    const route = (path: string) => {
        navigate(path);
        setNavbarState("hidden");
    };

    return (
        <>
            <Navbar navbarState={navbarState} toggleMenu={toggleMenu} route={route} />
            {navbarState === "visible" && <div onClick={() => setNavbarState("hidden")} className="mask" />}
            {children}
        </>
    );
}
