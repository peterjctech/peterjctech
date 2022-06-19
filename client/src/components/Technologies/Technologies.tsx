import React from "react";

interface TechnologiesProps {
    tech: {
        name: string;
        icon: string;
    }[];
}

export default function ({ tech }: TechnologiesProps) {
    return (
        <div className="technologies container">
            <h1>Technologies</h1>
            <div className="technologies__items">
                {tech.map((item) => {
                    return (
                        <div key={item.name} className="technologies__item">
                            <img src={item.icon} />
                            <h3>{item.name}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
