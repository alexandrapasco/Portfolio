import {
  SiHtml5, SiCss3, SiJavascript, SiReact,
  SiSequelize, SiPostgresql, SiNodedotjs,
  SiWordpress, SiAdobephotoshop, SiFigma, SiCanva,
  SiTrello, SiNotion, SiDiscord, SiGoogledrive, SiSass,
} from 'react-icons/si';

import {
  FaCheckCircle, FaLightbulb, FaUsers, FaSearch,
  FaUserCheck, FaComments, FaTools, FaHeart, FaLinkedin, 
  FaInstagram, FaFacebook,

} from 'react-icons/fa';


import Button from '../../App/components/Button/Button';
import './Skills.scss';

function Skills(): JSX.Element {
  return (
    <section className="skills section-anchor" aria-labelledby="skills">
      <header className="skills__header">
        <h3 className="skills__title" id="skills">Quels sont mes atouts ?</h3>
        <h4 className="skills__subtitle">Mes savoirs et mes pouvoirs pour créer et innover.</h4>
      </header>

      <aside className="skills__cards">
        <article className="skills__card">
          <h5 className="skills__card-title">Hard Skills</h5>
          <ul className="skills__icons">
            <li className="skills__icon-item"><SiHtml5 /><p>HTML</p></li>
            <li className="skills__icon-item"><SiCss3 /><p>CSS</p></li>
            <li className="skills__icon-item"><SiJavascript /><p>JavaScript</p></li>
            <li className="skills__icon-item"><SiReact /><p>React</p></li>
            <li className="skills__icon-item"><SiSequelize /><p>Sequelize</p></li>
            <li className="skills__icon-item"><SiPostgresql /><p>PostgreSQL</p></li>
            <li className="skills__icon-item"><SiNodedotjs /><p>Node.js</p></li>
            <li className="skills__icon-item"><SiSass /><p>Sass</p></li>
          </ul>
        </article>

        <article className="skills__card">
          <h5 className="skills__card-title">Outils</h5>
          <ul className="skills__icons">
            <li className="skills__icon-item"><SiWordpress /><p>WordPress</p></li>
            <li className="skills__icon-item"><SiAdobephotoshop /><p>Photoshop</p></li>
            <li className="skills__icon-item"><SiFigma /><p>Figma</p></li>
            <li className="skills__icon-item"><SiCanva /><p>Canva</p></li>
            <li className="skills__icon-item"><SiTrello /><p>Trello</p></li>
            <li className="skills__icon-item"><SiNotion /><p>Notion</p></li>
            <li className="skills__icon-item"><SiDiscord /><p>Discord</p></li>
            <li className="skills__icon-item"><SiGoogledrive /><p>GoogleDrive</p></li>
            <li className="skills__icon-item"><span className="social-icons"><FaLinkedin size={28} /><FaInstagram size={28} /><FaFacebook size={28} /></span><p>Social</p></li>
            </ul>
        </article>
            
        <article className="skills__card">
          <h5 className="skills__card-title">Soft Skills</h5>
          <ul className="skills__icons">
           <li className="skills__icon-item"><FaCheckCircle /><p>Organisation</p></li>
           <li className="skills__icon-item"><FaHeart /><p>Empathie</p></li>
           <li className="skills__icon-item"><FaLightbulb /><p>Créativité</p></li>
           <li className="skills__icon-item"><FaSearch /><p>Curiosité</p></li>
           <li className="skills__icon-item"><FaComments /><p>Communication</p></li>
           <li className="skills__icon-item"><FaUserCheck /><p>Autonomie</p></li>
           <li className="skills__icon-item"><FaTools /><p>Polyvalence</p></li>
           <li className="skills__icon-item"><FaUsers /><p>Collaboration</p></li>
          </ul>
        </article>

      </aside>

      <Button
        className="button-download-cv"
        text="Télécharger le CV"
        as="a"
        href="/docs/CV_Alexandra_PASCO.pdf"
        download
      />
    </section>
  );
}

export default Skills;
