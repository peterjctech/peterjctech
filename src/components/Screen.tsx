import React, { useState, useEffect, useContext } from "react";
import { AssembleContext } from "context";

interface ScreenProps {
    string: string;
}

const Screen = ({ string }: ScreenProps) => {
    const [text, setText] = useState("");
    const [isFlashing, setIsFlashing] = useState(false);
    const disassembleTo = useContext(AssembleContext);

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
            await timeout(500);
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
        <div className="screen">
            <p className="screen__text">
                {text}
                <span className={`screen__caret${isFlashing ? " flashing" : ""}`}></span>
            </p>
            <h6 onClick={() => disassembleTo("/projects")}>
                <a>{`Projects >>`}</a>
            </h6>
        </div>
    );
};

export default Screen;
