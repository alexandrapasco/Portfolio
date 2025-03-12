import React from 'react';
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
                  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" /></li>
                  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" /></li>
                  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" /></li>
                </ul>
              </details>
            </li>
            <li>
              <details className="skills__details">
                <summary className="skills__summary">Front-end</summary>
                <p>React, Vue.js, Svelte</p>
              </details>
            </li>
            <li>
              <details className="skills__details">
                <summary className="skills__summary">Back-end</summary>
                <p>Node.js, Express, PHP</p>
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
                <p>WordPress, Joomla, Drupal</p>
              </details>
            </li>
            <li>
              <details className="skills__details">
                <summary className="skills__summary">Infographie</summary>
                <p>Photoshop, Illustrator, Figma</p>
              </details>
            </li>
            <li>
              <details className="skills__details">
                <summary className="skills__summary">Gestion de projet</summary>
                <p>Scrum, Kanban, Trello</p>
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
                <p>Capacité à gérer plusieurs projets efficacement.</p>
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

      {/* Bouton vers la section "Profil" */}
      <Button text="En savoir plus" href="#presentation" />
      <img id="cv" src="src/assets/images/CV-AP.jpg" alt="Document CV" />
    </section>
  );
}

export default Skills;
