import { Link } from 'react-router-dom';
import './Error404.scss'; // ton style personnalisé
import errorImage from '../../assets/images/404.png'; // ajuste le chemin selon ton projet

const Error404 = () => {
  return (
    <main className="not-found" role="main" aria-label="Page non trouvée">
      <h1>404 - Page non trouvée</h1>
      <p>Oups ! La page que vous cherchez n'existe pas...</p>
      <img
        src={errorImage}
        alt="Illustration d'erreur 404"
        className="not-found__image"
      />
      <Link to="/" className="not-found__link">Retour à l’accueil</Link>
    </main>
  );
};

export default Error404;
