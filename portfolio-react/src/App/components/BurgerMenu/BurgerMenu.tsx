import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './BurgerMenu.scss';

function BurgerMenu({ isOpen, toggleMenu }) {
    return (
      <div className="burger" onClick={toggleMenu}>
        {isOpen ? (
          <div className="icon open">
            <FaTimes size={30} color="#55595E" /> {/* Icône de croix */}
          </div>
        ) : (
          <div className="icon closed">
            <FaBars size={30} color="#55595E" /> {/* Icône de menu burger */}
          </div>
        )}
      </div>
    );
  }

export default BurgerMenu;
