import React, { useEffect, useState } from "react";

interface TypingProps {
    string: string;
}

const Typing = ({ string }: TypingProps) => {
    const [text, setText] = useState("");
    const [isFlashing, setIsFlashing] = useState(false);

    useEffect(() => {
        const output = string
            .split(".")
            .slice(0, -1)
            .map((s) => s + ".");
        const arr: number[] = [];
        for (let i = 0; i < output.length; i++) {
            arr.push(output[i].length);
        }

        const timeout = (ms: number) => {
            return new Promise((resolve) => setTimeout(resolve, ms));
        };

        let x = 0;
        const init = async () => {
            for (let i = 0; i < arr.length; i++) {
                setIsFlashing(false);
                for (let j = 0; j < arr[i]; j++) {
                    await timeout(40);
                    x++;
                    setText(string.slice(0, x));
                }
                setIsFlashing(true);
                await timeout(700);
            }
        };
        init();
    }, []);
    return (
        <div className="typing">
            <p className="typing__text">
                {text}
                <span className={`typing__block${isFlashing ? " flashing" : ""}`}></span>
            </p>
        </div>
    );
};

export default Typing;
