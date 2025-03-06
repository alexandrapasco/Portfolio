import React from 'react';
import Button from '../../App/components/Button/Button';
import '../../App/components/Button/Button.scss';
import './About.scss';

function About() {
  return (
    <section className="about" aria-labelledby="about">

      <header className="about__header">
        <h4 className="about__title" id="about">À propos</h4>
      </header>

      <article className="about__content">
        <h5 className="about__subtitle">Inclusif et visible, mais pas sans style</h5>
        <p className="about__text">
          D'abord photographe et comédienne, puis responsable en restauration, j’ai toujours évolué dans des milieux où l’humain est au cœur des échanges. Ces expériences m’ont permis de faire ressortir mon sens de l’écoute, de l’observation et de l’empathie, des qualités que j’applique aujourd’hui au développement web. J’aime concevoir des interfaces qui allient esthétique et accessibilité, en veillant à créer des expériences pensées pour tous. 
          <br /><br />
          Mon regard attentif me pousse à imaginer des solutions inclusives, tandis que ma créativité donne vie à des interfaces fluides et engageantes. Pour moi, le web est un terrain d’expression où technologie et sensibilité se rencontrent.
        </p>

        {/* Bouton qui redirige vers l'ancre "Presentation" */}
        <Button text="En savoir plus" href="#Presentation" />

      </article>

    </section>
  );
}

export default About;
