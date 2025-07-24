import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './DarkTheme.scss';
import { useTranslation } from 'react-i18next';

interface DarkThemeProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkTheme: React.FC<DarkThemeProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isRotated, setIsRotated] = useState(false);
  const { t } = useTranslation();

  const handleClick = () => {
    setIsRotated(!isRotated);
    toggleDarkMode();
  };

  return (
    <button
      className={`dark-mode-toggle ${isRotated ? 'rotated' : ''}`}
      onClick={handleClick}
      aria-label={t(isDarkMode ? 'tooltip.modeOff' : 'tooltip.modeOn')}
      title={t(isDarkMode ? 'tooltip.modeOff' : 'tooltip.modeOn')}
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
