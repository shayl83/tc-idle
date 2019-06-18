import * as React from "react";
import {ReactNode} from "react";

interface ButtonProps {
    onClick?: () => void
    children: ReactNode,
    className?: string
}

const RatButton: React.FC<ButtonProps> =
    ({ onClick, children, className }) => (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );

export default RatButton;