import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './DarkTheme.scss';

function DarkTheme({ isDarkMode, toggleDarkMode }) {
  return (
    <div className="dark-mode-toggle" onClick={toggleDarkMode}>
      {isDarkMode ? (
        <FaSun className="icon sun" size={30} />
      ) : (
        <FaMoon className="icon moon" size={30} />
      )}
    </div>
  );
}

export default DarkTheme;
