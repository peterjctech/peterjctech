import React from "react";

interface ButtonProps {
    variant: "primary" | "success";
    click?: () => void;
    children: React.ReactNode;
    className?: string;
}

const Button = ({ variant, children, click, className }: ButtonProps) => {
    return (
        <button onClick={click} className={`button ${variant} ${className || ""}`}>
            {children}
        </button>
    );
};

export default Button;
