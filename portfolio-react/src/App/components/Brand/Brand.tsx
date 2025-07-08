import './Brand.scss';
import { FaSearch } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';

function Brand() {
  return (
    <section className="brand">
      <h1 className="brand__title">Alexandra Pasco</h1>
      <h2 className="brand__subtitle">Développeur Web Full-Stack</h2>
      <p className="brand__paragraph">
        <FaSearch aria-hidden="true" /> Cherche alternance en contrat de professionnalisation sur 12 mois<br />
        <FaGraduationCap aria-hidden="true" /> Prépartion d'un Bachelor en Communication & Marketing<br />
        <FaClock aria-hidden="true" /> Rythme : 4 jours en entreprise / 1 jour de formation
      </p>
    </section>
  );
}

export default Brand;
