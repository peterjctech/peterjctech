import React, { createContext } from "react";
import App from "./src/App";
import "./src/styles/index.scss";

const wrapPageElement = ({ element, props }) => {
    return <App {...props}>{element}</App>;
};

export { wrapPageElement };
