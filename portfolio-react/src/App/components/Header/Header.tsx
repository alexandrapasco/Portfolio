import React, { useState, useEffect } from 'react';
import './Header.scss';
import HeaderLogo from '../Header/HeaderLogo/HeaderLogo';
import HeaderActions from '../Header/HeaderActions/HeaderActions';
import HeaderNav from '../Header/HeaderNav/HeaderNav';
import BurgerMenu from './BurgerMenu/BurgerMenu';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <header className={`header ${menuOpen ? 'header--open' : ''}`}>
      
      {/* Actions (Mode sombre) */}
      <aside className="header__actions">
        <HeaderActions 
          isDarkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
        />
      </aside>

      <HeaderLogo />
      
      {/* Menu Burger : accessible et responsive */}
      <button 
        className="header__burger" 
        aria-label="Ouvrir le menu" 
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        <BurgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
      </button>

      {/* Navigation : cachée sur mobile, visible sur grand écran */}
      <HeaderNav isMenuOpen={menuOpen} />
    </header>
  );
}

export default Header;
