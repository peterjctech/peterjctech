import React from "react";

interface ButtonProps {
    variant: "primary" | "success";
    click?: () => void;
    children: React.ReactNode;
}

const Button = ({ variant, children, click }: ButtonProps) => {
    return (
        <button onClick={click} className={`button ${variant}`}>
            {children}
        </button>
    );
};

export default Button;
