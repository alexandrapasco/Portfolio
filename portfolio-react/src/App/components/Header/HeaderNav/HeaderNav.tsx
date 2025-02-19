import './HeaderNav.scss';

interface HeaderNavProps {
  isMenuOpen: boolean;
}

function HeaderNav({ isMenuOpen }: HeaderNavProps) {
  return (
    <nav className={`header__nav-container ${isMenuOpen ? 'header__nav--open' : ''}`}>
      <ul className="header__nav">
        <li className="header__nav-item"><a href="#about" className="header__nav-link">À propos</a></li>
        <li className="header__nav-item"><a href="#experiences" className="header__nav-link">Expériences</a></li>
        <li className="header__nav-item"><a href="#projects" className="header__nav-link">Projets</a></li>
        <li className="header__nav-item"><a href="#contact" className="header__nav-link">Contact</a></li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
