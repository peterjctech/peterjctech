import React, { useState } from "react";
import { Footer, Navbar, Menu } from "components";
import { navigate } from "gatsby";

interface LayoutProps {
    children: JSX.Element;
}

const App = ({ children }: LayoutProps) => {
    const [menuState, setMenuState] = useState("");

    const toggleMenu = () => {
        if (menuState === "visible") {
            setMenuState("hidden");
        } else {
            setMenuState("visible");
        }
    };

    const route = (path: string) => {
        navigate(path);
        setMenuState("hidden");
    };

    const clickMask = () => {
        if (menuState) setMenuState("hidden");
    };

    return (
        <>
            <Navbar state={menuState} route={route} />
            <Menu state={menuState} toggle={toggleMenu} />
            {children}
            <div onClick={clickMask} className={`mask ${menuState === "visible" ? "visible" : "hidden"}`} />
            <Footer />
        </>
    );
};

export default App;
