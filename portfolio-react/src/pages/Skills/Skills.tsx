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
            <li className="skills__icon-item"><SiHtml5 size={40} /><p>HTML</p></li>
            <li className="skills__icon-item"><SiCss3 size={40} /><p>CSS</p></li>
            <li className="skills__icon-item"><SiJavascript size={40} /><p>JavaScript</p></li>
            <li className="skills__icon-item"><SiReact size={40} /><p>React</p></li>
            <li className="skills__icon-item"><SiSequelize size={40} /><p>Sequelize</p></li>
            <li className="skills__icon-item"><SiPostgresql size={40} /><p>PostgreSQL</p></li>
            <li className="skills__icon-item"><SiNodedotjs size={40} /><p>Node.js</p></li>
            <li className="skills__icon-item"><SiSass size={40} /><p>Sass</p></li>
          </ul>
        </article>

        <article className="skills__card">
          <h5 className="skills__card-title">Outils</h5>
          <ul className="skills__icons">
            <li className="skills__icon-item"><SiWordpress size={40} /><p>WordPress</p></li>
            <li className="skills__icon-item"><SiAdobephotoshop size={40} /><p>Photoshop</p></li>
            <li className="skills__icon-item"><SiFigma size={40} /><p>Figma</p></li>
            <li className="skills__icon-item"><SiCanva size={40} /><p>Canva</p></li>
            <li className="skills__icon-item"><SiTrello size={40} /><p>Trello</p></li>
            <li className="skills__icon-item"><SiNotion size={40} /><p>Notion</p></li>
            <li className="skills__icon-item"><SiDiscord size={40} /><p>Discord</p></li>
            <li className="skills__icon-item"><SiGoogledrive size={40} /><p>GoogleDrive</p></li>
            <li className="skills__icon-item"><span className="social-icons"><FaLinkedin size={28} /><FaInstagram size={28} /><FaFacebook size={28} /></span><p>Social</p></li>
            </ul>
        </article>
            
        <article className="skills__card">
          <h5 className="skills__card-title">Soft Skills</h5>
          <ul className="skills__icons">
           <li className="skills__icon-item"><FaCheckCircle size={40} /><p>Organisation</p></li>
           <li className="skills__icon-item"><FaHeart size={40} /><p>Empathie</p></li>
           <li className="skills__icon-item"><FaLightbulb size={40} /><p>Créativité</p></li>
           <li className="skills__icon-item"><FaSearch size={40} /><p>Curiosité</p></li>
           <li className="skills__icon-item"><FaComments size={40} /><p>Communication</p></li>
           <li className="skills__icon-item"><FaUserCheck size={40} /><p>Autonomie</p></li>
           <li className="skills__icon-item"><FaTools size={40} /><p>Polyvalence</p></li>
           <li className="skills__icon-item"><FaUsers size={40} /><p>Collaboration</p></li>
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
