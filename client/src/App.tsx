import React from "react";
import { Footer, Navbar, Logo } from "components";

interface LayoutProps {
    children: JSX.Element;
}

const App = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar />
            <Footer />
            {children}
            <Logo isPrototype />
        </>
    );
};

export default App;
