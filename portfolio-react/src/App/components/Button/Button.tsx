import React from 'react';
import './Button.scss';
console.log("Button.scss chargé !");

interface ButtonProps {
  text: string;
  onClick?: () => void;  // Fonction à exécuter au clic (optionnelle)
  href?: string;         // Lien externe ou interne
  download?: boolean;    // Indique si c'est un téléchargement
  target?: "_blank" | "_self"; // Ouvre dans un nouvel onglet ou non
}

const Button: React.FC<ButtonProps> = ({ text, onClick, href, download = false, target = "_self" }) => {
  if (href) {
    return (
      <a 
        href={href} 
        className="button"
        target={target} 
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        download={download ? "" : undefined} // Active le téléchargement si `true`
      >
        {text}
      </a>
    );
  }

  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;

