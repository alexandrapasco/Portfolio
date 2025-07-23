// src/components/Header/Header.tsx

import React, { useState, useEffect } from 'react';
import './Header.scss';
import HeaderLogo from '../Header/HeaderLogo/HeaderLogo';
import HeaderActions from '../Header/HeaderActions/HeaderActions';
import HeaderNav from '../Header/HeaderNav/HeaderNav';
import HeaderHome from './HeaderHome/HeaderHome';
import BurgerMenu from './BurgerMenu/BurgerMenu';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isSmall, setIsSmall] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSmall(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${menuOpen ? 'header--open' : ''} ${isSmall ? 'header--small' : ''}`}>

      {/* Actions (Langue, DarkMode, Home Desktop) */}
      <aside className="header__actions left">
        <HeaderActions 
          isDarkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
        />
        {/* Bouton Home visible seulement sur desktop */}
        <HeaderHome className="header__home--desktop" />
      </aside>

      {/* Logo */}
      <HeaderLogo />

      {/* Burger + Home Mobile */}
      <aside className="header__actions right">
        {/* Bouton Home visible seulement sur mobile */}
        <HeaderHome className="header__home header__home--mobile" />

        <button
          className="header__burger"
          aria-label="Afficher le Menu"
          title="Afficher le Menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <BurgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
        </button>
      </aside>

      {/* Navigation principale */}
      <HeaderNav isMenuOpen={menuOpen} />
    </header>
  );
}

export default Header;
