import './HeaderNav.scss';

interface HeaderNavProps {
  isMenuOpen: boolean;
}

function HeaderNav({ isMenuOpen }: HeaderNavProps) {
  return (
    <nav className={`header__nav-container ${isMenuOpen ? 'header__nav--open' : ''}`}>
      <ul className="header__nav">
        <li className="header__nav-item"><a href="#profile" className="header__nav-link">Profil</a></li>
        <li className="header__nav-item"><a href="#skills" className="header__nav-link">Compétences</a></li>
        <li className="header__nav-item"><a href="#projects" className="header__nav-link">Projets</a></li>
        <li className="header__nav-item"><a href="#contact" className="header__nav-link">Contact</a></li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
