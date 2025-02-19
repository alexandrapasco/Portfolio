import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './BurgerMenu.scss';

interface BurgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

function BurgerMenu({ isOpen, toggleMenu }: BurgerMenuProps) {
  return (
    <div className="burger" onClick={toggleMenu}>
      {isOpen ? (
        <div className="icon open">
          <FaTimes />
        </div>
      ) : (
        <div className="icon closed">
          <FaBars />
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;
