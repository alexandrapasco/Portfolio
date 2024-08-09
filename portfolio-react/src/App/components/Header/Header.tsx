import React, { useState, useEffect } from 'react';
import './Header.scss';
import DarkTheme from '../DarkTheme/DarkTheme';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

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
    <header className={menuOpen ? 'open' : ''}>
      <nav id="nav-menu">
        <nav className="nav__slogan">
          <a href="index.html"><h1 className="title__url">alexandrapasco.com</h1></a>
          <h2 className="title__slogan">Votre site selon vos envies</h2>
        </nav>

        <nav className="nav__logo">
          <div className="box-logo">
            <img id="logo" src="/src/assets/images/Logo-AP.png" alt="Logo du site" />
          </div>
        </nav>

        {/* Utiliser le composant DarkTheme */}
        <DarkTheme isDarkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* Utiliser le composant BurgerMenu */}
        <BurgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />

        <ul className={`nav__list ${menuOpen ? 'open' : ''}`}>
          <li className="nav__item">
            <a href="#about" className="nav__link">À propos</a>
          </li>
          <li className="nav__item">
            <a href="#experiences" className="nav__link">Expériences</a>
          </li>
          <li className="nav__item">
            <a href="#projects" className="nav__link">Projets</a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
