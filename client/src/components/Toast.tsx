import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

interface ToastProps {
    message: string;
}

const Toast = ({ message }: ToastProps) => {
    return (
        <div className="toast">
            <AiFillCheckCircle />
            <p>{message}</p>
        </div>
    );
};

export default Toast;
