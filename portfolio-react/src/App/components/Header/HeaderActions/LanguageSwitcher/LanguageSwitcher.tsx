// src/components/HeaderActions/LanguageSwitcher/LanguageSwitcher.tsx

import React, { useState, useEffect } from 'react';
import { FaGlobeEurope, FaGlobeAmericas } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.scss';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const toggleLanguage = () => {
    setIsRotated(!isRotated);
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      className={`language-toggle ${isRotated ? 'rotated' : ''}`}
      onClick={toggleLanguage}
      aria-label={
        i18n.language === 'fr'
          ? 'Switch site to English'
          : 'Passer le site en français'
      }
      title="Switcher de langue FR/EN"
    >
      {i18n.language === 'fr' ? (
        <FaGlobeAmericas className="icon" size={30} />
      ) : (
        <FaGlobeEurope className="icon" size={30} />
      )}
    </button>
  );
};

export default LanguageSwitcher;
