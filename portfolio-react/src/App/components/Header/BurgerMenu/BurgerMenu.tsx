import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './BurgerMenu.scss';

interface BurgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

function BurgerMenu({ isOpen, toggleMenu }: BurgerMenuProps) {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated); // Change l'état de la rotation
    toggleMenu(); // Active/Désactive le menu burger
  };

  return (
    <button className={`burger ${isRotated ? 'rotated' : ''}`} onClick={handleClick}>
      {isOpen ? (
        <FaTimes className="icon open" size={30} />
      ) : (
        <FaBars className="icon close" size={30} />
      )}
    </button>
  );
}

export default BurgerMenu;
