import './HeaderLogo.scss';
import logo from '/images/Logo-AP.webp'; 

function HeaderLogo() {
  return (
    <figure className="header__logo">
      <img 
        src={logo}
        alt="Logo du site" 
        className="header__logo-img"
        loading="lazy"
      />
    </figure>
  );
}

export default HeaderLogo;
