// src/components/Header/HeaderHome/HeaderHome.tsx

import { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import './HeaderHome.scss';
import { useTranslation } from 'react-i18next';

interface HeaderHomeProps {
  className?: string;
}

function HeaderHome({ className }: HeaderHomeProps) {
  const [rotated, setRotated] = useState(false);

  // 🔁 Hook pour accéder aux traductions
  const { t } = useTranslation();

  // 🔄 Animation quand on clique sur l'icône
  const handleClick = () => {
    setRotated(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setRotated(false), 600);
  };

  return (
    <aside className={`header__home ${className ?? ''}`}>
      <button
        onClick={handleClick}
        className={`header__home-button ${rotated ? 'rotated' : ''}`}
        aria-label={t('tooltip.home')}  // accessibilité
        title={t('tooltip.home')}       // infobulle au survol
      >
        <FaHome className="header__home-icon" size={30} />
      </button>
    </aside>
  );
}

export default HeaderHome;
