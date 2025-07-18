import './HeaderNav.scss';
import { useTranslation } from 'react-i18next';

interface HeaderNavProps {
  isMenuOpen: boolean;
}

function HeaderNav({ isMenuOpen }: HeaderNavProps) {
  const { t } = useTranslation('common');

  return (
    <nav className={`header__nav-container ${isMenuOpen ? 'header__nav--open' : ''}`}>
      <ul className="header__nav">

        <li className="header__nav-item"><a href="#profile" className="header__nav-link">{t('nav.profile')}</a></li>
        <li className="header__nav-item"><a href="#skills" className="header__nav-link">{t('nav.skills')}</a></li>
        <li className="header__nav-item"><a href="#projects" className="header__nav-link">{t('nav.projects')}</a></li>
        <li className="header__nav-item"><a href="#contact" className="header__nav-link">{t('nav.contact')}</a></li>

      </ul>
    </nav>
  );
}

export default HeaderNav;
