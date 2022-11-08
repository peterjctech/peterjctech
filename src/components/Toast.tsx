import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

interface ToastProps {
    message: string;
    variant: "error" | "success";
}

const Toast = ({ message, variant }: ToastProps) => {
    return (
        <div className={`toast ${variant}`}>
            <AiFillCheckCircle />
            <p>{message}</p>
        </div>
    );
};

export default Toast;
