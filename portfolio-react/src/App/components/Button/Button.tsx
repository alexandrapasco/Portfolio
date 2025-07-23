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

const Button: React.FC<ButtonProps> = ({ 
  text, 
  children, 
  onClick, 
  href, 
  download = false, 
  target = "_self", 
  as = "button",
  className, 
  disabled 
}) => {
  
  if (as === "a" && href) {
    return (
      <a 
        href={href} 
        className={`button ${className || ''}`}
        target={target} 
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        download={download ? "" : undefined}
      >
        {children || text}
      </a>
    );
  }

  return (
    <button 
      className={`button ${className || ''}`} 
      onClick={onClick}
      disabled={disabled} 
    >
      {children || text}
    </button>
  );
}

export default Button;
