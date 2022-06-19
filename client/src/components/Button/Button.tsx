import React from "react";

interface ButtonProps {
    variant: string;
    size: string;
    children: React.ReactNode;
}

export default function ({ variant, size, children }: ButtonProps) {
    return <button className={`button ${size} ${variant}`}>{children}</button>;
}
