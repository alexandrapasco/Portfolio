import React from 'react';
import './Button.scss';
interface ButtonProps {
    text?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    href?: string;
    download?: boolean;
    target?: "_blank" | "_self";
    as?: "button" | "a";
    className?: string;
    disabled?: boolean;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
