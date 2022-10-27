import React, { useEffect, useState } from "react";

interface TypingProps {
    string: string;
}

const Typing = ({ string }: TypingProps) => {
    const [text, setText] = useState("");
    const [isFlashing, setIsFlashing] = useState(false);

    useEffect(() => {
        const appendText = async () => {
            const strings = string.split(".");
            for (let i = 0; i < strings.length; i++) {
                strings[i] += ".";
            }
        };
        appendText();
    }, []);
    return (
        <div className="typing">
            <p className="typing__text">{text}</p>
            <div className={`typing__block${isFlashing ? " flashing" : ""}`} />
        </div>
    );
};

export default Typing;
