import {
  SiHtml5, SiCss3, SiJavascript, SiReact,
  SiSequelize, SiPostgresql, SiNodedotjs,
  SiWordpress, SiAdobephotoshop, SiFigma, SiCanva,
  SiTrello, SiNotion, SiDiscord, SiGooglecalendar
} from 'react-icons/si';

import Button from '../../App/components/Button/Button';
import './Skills.scss';

function Skills() {
  return (
    <section className="skills section-anchor" aria-labelledby="skills">
      <header className="skills__header">
        <h3 className="skills__title" id="skills">Quels sont mes atouts ?</h3>
        <h4 className="skills__subtitle">Mes savoirs et mes pouvoirs pour créer et innover.</h4>
      </header>

      <aside className="skills__cards">
        {/* Carte Technologies */}
        <article className="skills__card">
          <h5 className="skills__card-title">Technologies</h5>
          <ul className="skills__list">
            <li>
              <details className="skills__details">
                <summary className="skills__summary">Intégration web</summary>
                <ul className="skills__icons">
                  <li><SiHtml5 /></li>
                  <li><SiCss3 /></li>
                  <li><SiJavascript /></li>
                </ul>
              </details>
            </li>
            <li>
              <details className="skills__details">
                <summary className="skills__summary">Front-end</summary>
                <ul className="skills__icons">
                  <li><SiReact /></li>
                </ul>
              </details>
            </li>
            <li>
              <details className="skills__details">
                <summary className="skills__summary">Back-end</summary>
                <ul className="skills__icons">
                  <li><SiSequelize /></li>
                  <li><SiPostgresql /></li>
                  <li><SiNodedotjs /></li>
                </ul>
              </details>
            </li>
          </ul>
        </article>

        {/* Carte Divers */}
        <article className="skills__card">
          <h5 className="skills__card-title">Divers</h5>
          <ul className="skills__list">
            <li>
              <details className="skills__details">
                <summary className="skills__summary">CMS</summary>
                <ul className="skills__icons">
                  <li><SiWordpress /></li>
                </ul>
              </details>
            </li>
            <li>
              <details className="skills__details">
                <summary className="skills__summary">Infographie</summary>
                <ul className="skills__icons">
                  <li><SiAdobephotoshop /></li>
                  <li><SiFigma /></li>
                  <li><SiCanva /></li>
                </ul>
              </details>
            </li>
            <li>
              <details className="skills__details">
                <summary className="skills__summary">Gestion de projet</summary>
                <ul className="skills__icons">
                  <li><SiTrello /></li>
                  <li><SiNotion /></li>
                  <li><SiDiscord /></li>
                </ul>
              </details>
            </li>
          </ul>
        </article>

        {/* Carte Savoirs-Être */}
        <article className="skills__card">
          <h5 className="skills__card-title">Savoirs-Être</h5>
          <ul className="skills__list">
            <li>
              <details className="skills__details">
                <summary className="skills__summary">Organisation</summary>
                <ul className="skills__icons">
                  <li><SiGooglecalendar /></li>
                </ul>
              </details>
            </li>
            <li>
              <details className="skills__details">
                <summary className="skills__summary">Créativité</summary>
                <p>Force de proposition pour de nouvelles idées.</p>
              </details>
            </li>
            <li>
              <details className="skills__details">
                <summary className="skills__summary">Travail en équipe</summary>
                <p>Bonne communication et collaboration.</p>
              </details>
            </li>
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
