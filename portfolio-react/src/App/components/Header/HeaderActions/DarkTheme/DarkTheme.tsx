import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './DarkTheme.scss';

interface DarkThemeProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkTheme: React.FC<DarkThemeProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="dark-mode-toggle" onClick={toggleDarkMode} aria-label={isDarkMode ? 'Désactiver le mode sombre' : 'Activer le mode sombre'}>
      {isDarkMode ? (
        <FaSun className="icon sun" size={30} />
      ) : (
        <FaMoon className="icon moon" size={30} />
      )}
    </div>
  );
}

export default DarkTheme;
