import * as React from "react";

interface ButtonProps {
    onClick: () => void
    text: string
}

export const Button: React.FC<ButtonProps> =
    ({ onClick, text}) => (
        <button className="card" onClick={onClick}>
            {text}
        </button>
    );