import React, { useState } from "react";
import { Footer, Navbar, Menu } from "components";
import { navigate } from "gatsby";
import { AssembleContext } from "./context";

interface LayoutProps {
    children: JSX.Element;
}

const App = ({ children }: LayoutProps) => {
    const [menuState, setMenuState] = useState("");
    const [assembleStatus, setAssembleStatus] = useState("assemble");

    const disassembleTo = (path: string) => {
        setMenuState("hidden");
        setAssembleStatus("disassemble");
        setTimeout(() => {
            navigate(path);
            setAssembleStatus("assemble");
        }, 1000);
    };

    const toggleMenu = () => {
        if (menuState === "visible") {
            setMenuState("hidden");
        } else {
            setMenuState("visible");
        }
    };

    const route = async (path: string) => {
        setMenuState("hidden");
        disassembleTo(path);
    };

    const clickMask = () => {
        if (menuState) setMenuState("hidden");
    };

    return (
        <div className={assembleStatus}>
            <AssembleContext.Provider value={disassembleTo}>
                <Navbar state={menuState} route={route} />
                <Menu state={menuState} toggle={toggleMenu} />
                {children}
                <div onClick={clickMask} className={`mask ${menuState === "visible" ? "visible" : "hidden"}`} />
                <Footer />
            </AssembleContext.Provider>
        </div>
    );
};

export default App;
