import { Link } from 'react-router-dom';
import './HeaderLogo.scss';
import logo from '/images/Logo-AP.webp';

function HeaderLogo() {
  return (
    <figure className="header__logo">
      <Link to="/" title="Accueil">
        <img 
          src={logo}
          alt="Alexandra Pasco – Portfolio" 
          className="header__logo-img"
          loading="lazy"
        />
      </Link>
    </figure>
  );
}

export default HeaderLogo;
