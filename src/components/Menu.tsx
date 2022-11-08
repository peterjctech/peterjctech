import React from "react";

interface MenuProps {
    state: string;
    toggle: () => void;
}

const Menu = ({ state, toggle }: MenuProps) => {
    return (
        <svg viewBox="0 0 100 100" onClick={toggle} className={`menu ${state === "visible" ? "toggled" : ""}`}>
            <rect className="menu__top" />
            <rect className="menu__middle" />
            <rect className="menu__bottom" />
        </svg>
    );
};

export default Menu;
