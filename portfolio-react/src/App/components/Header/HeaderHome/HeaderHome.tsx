import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import './HeaderHome.scss';

interface HeaderHomeProps {
  className?: string;
}

function HeaderHome({ className }: HeaderHomeProps) {
  const [rotated, setRotated] = useState(false);

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
        aria-label="Retour à l'accueil"
        title="Retour à l'accueil"
      >
        <FaHome className="header__home-icon" size={30} />
      </button>
    </aside>
  );
}

export default HeaderHome;
