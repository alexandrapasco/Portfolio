import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './DarkTheme.scss';

interface DarkThemeProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkTheme: React.FC<DarkThemeProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated); // Alterne la rotation
    toggleDarkMode(); // Active/Désactive le mode sombre
  };

  return (
    <button
      className={`dark-mode-toggle ${isRotated ? 'rotated' : ''}`}
      onClick={handleClick}
      aria-label={isDarkMode ? 'Désactiver le mode sombre' : 'Activer le mode sombre'}
      title="Afficher le Dark/Light Mode"
    >
      {isDarkMode ? (
        <FaSun className="icon sun" size={30} />
      ) : (
        <FaMoon className="icon moon" size={30} />
      )}
    </button>
  );
};

export default DarkTheme;
