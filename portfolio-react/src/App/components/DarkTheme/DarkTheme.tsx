import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './DarkTheme.scss';

function DarkTheme({ isOpen, toggleMenu }) {
    return (
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
        {isOpen ? (
          <div className="icon open">
            <FaSun size={30} color="#55595E" /> {/* Icône de soleil */}
          </div>
        ) : (
          <div className="icon closed">
            <FaMoon size={30} color="#55595E" /> {/* Icône de lune */}
          </div>
        )}
      </div>
    );
  }

export default DarkTheme;