import React from "react";

interface InputProps {
    name: string;
    type?: string;
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    icon: React.ReactElement;
}

const Input = ({ name, value, handleChange, placeholder, icon, type }: InputProps) => {
    return (
        <div className="input">
            <div className="input__icon">{icon}</div>
            <input
                name={name}
                value={value}
                type={type || "text"}
                onChange={handleChange}
                placeholder={placeholder}
                spellCheck="false"
                autoComplete="off"
            />
        </div>
    );
};

export default Input;
