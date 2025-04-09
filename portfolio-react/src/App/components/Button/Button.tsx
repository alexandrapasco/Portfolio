import React from 'react';
import './Button.scss';

interface ButtonProps {
  text?: string; // Rend "text" optionnel pour compatibilité
  children?: React.ReactNode; // Ajoute `children`
  onClick?: () => void;
  href?: string;
  download?: boolean;
  target?: "_blank" | "_self";
  as?: "button" | "a";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  children, 
  onClick, 
  href, 
  download = false, 
  target = "_self", 
  as = "button" 
}) => {
  
  if (as === "a" && href) {
    return (
      <a 
        href={href} 
        className="button"
        target={target} 
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        download={download ? "" : undefined}
      >
        {children || text} {/* Utilise `children` si disponible, sinon `text` */}
      </a>
    );
  }

  return (
    <button className="button" onClick={onClick}>
      {children || text} {/* Utilise `children` si dispo, sinon `text` */}
    </button>
  );
}

export default Button;
