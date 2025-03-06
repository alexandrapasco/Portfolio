import React from 'react';
import './Presentation.scss';

function Presentation() {
  return (
    <section className="presentation" aria-labelledby="presentation">

      <header className="presentation__header">
        <h4 className="presentation__title" id="presentation">Qui suis-je ?</h4>
        <h4 className="presentation__title" id="presentation">Observer, comprendre, créer : ma vision du web.f</h4>
      </header>

      <article className="presentation__content">

      <h5 className="presentation__subtitle">Inclusif et visible, mais pas sans style</h5>
        <p className="presentation__text">
          D'abord photographe et comédienne, puis responsable en restauration, j’ai toujours évolué dans des milieux où l’humain est au cœur des échanges. Ces expériences m’ont permis de faire ressortir mon sens de l’écoute, de l’observation et de l’empathie, des qualités que j’applique aujourd’hui au développement web. J’aime concevoir des interfaces qui allient esthétique et accessibilité, en veillant à créer des expériences pensées pour tous. 
          <br /><br />
          Mon regard attentif me pousse à imaginer des solutions inclusives, tandis que ma créativité donne vie à des interfaces fluides et engageantes. Pour moi, le web est un terrain d’expression où technologie et sensibilité se rencontrent.
        </p>

      </article>

      <aside className="presentation__details">

        <figure className="presentation__profile">
          <img className="presentation__photo" src="/src/assets/images/Picture-Profile.jpeg" alt="Alexandra Pasco - Photo de profil" />
        </figure>

        <a className="presentation__linkedin" href="https://www.linkedin.com/in/alexandrapasco/" target="_blank" rel="noopener noreferrer">
          <img className="presentation__linkedin-logo" src="/src/assets/images/logo-linkdedin2.png" alt="Profil LinkedIn d'Alexandra Pasco" />
        </a>

        <iframe className="presentation__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42187.021946366986!2d1.8112978495557124!3d48.63493552180274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e426c4a08b0127%3A0x40b82c3688c3910!2s78120%20Rambouillet!5e0!3m2!1sen!2sfr!4v1723139694452!5m2!1sen!2sfr" title="Localisation Rambouillet"></iframe>

      </aside>
      
    </section>
  );
}

export default Presentation;