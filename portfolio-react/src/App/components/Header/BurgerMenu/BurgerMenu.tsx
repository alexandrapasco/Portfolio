import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './BurgerMenu.scss';

interface BurgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  ariaLabel?: string;
  ariaExpanded?: boolean;
}

function BurgerMenu({ isOpen, toggleMenu }: BurgerMenuProps) {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated); // Change l'état de la rotation
    toggleMenu(); // Active/Désactive le menu burger
  };

  return (
    <button 
    className={`burger ${isRotated ? 'rotated' : ''}`} 
    onClick={handleClick}
    aria-label="Ouvrir le menu de navigation">
      {isOpen ? (
        <FaTimes className="icon open" size={30} />
      ) : (
        <FaBars className="icon close" size={30} />
      )}
    </button>
  );
}

export default BurgerMenu;
