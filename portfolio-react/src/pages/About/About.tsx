import React from 'react';
import './About.scss';

function About() {
  return (
    <div className="about">
      <div className="title-container">
        <h4 className="title" id="about">À propos</h4>
      </div>
      <p className="about__text">
      D'abord photographe et comédienne, puis responsable en restauration, j’ai toujours évolué dans des milieux où l’humain est au cœur des échanges. Ces expériences m’ont permis de faire ressortir mon sens de l’écoute, de l’observation et de l’empathie, des qualités que j’applique aujourd’hui au développement web. J’aime concevoir des interfaces qui allient esthétique et accessibilité, en veillant à créer des expériences pensées pour tous. 

Mon regard attentif me pousse à imaginer des solutions inclusives, tandis que ma créativité donne vie à des interfaces fluides et engageantes. Pour moi, le web est un terrain d’expression où technologie et sensibilité se rencontrent.
      </p>
      <div className="about__informations">
      <img id="photo_profil" src="/src/assets/images/Picture-Profile.jpeg" alt="Photo de Profil" />
<a className="button__linkedin" href="https://www.linkedin.com/in/alexandrapasco/" target="_blank">
  <img id="logo-linkedin" src="/src/assets/images/logo-linkdedin2.png" alt="LinkedIn" />
</a>

        <iframe className="about__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42187.021946366986!2d1.8112978495557124!3d48.63493552180274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e426c4a08b0127%3A0x40b82c3688c3910!2s78120%20Rambouillet!5e0!3m2!1sen!2sfr!4v1723139694452!5m2!1sen!2sfr"></iframe>
      </div>
    </div>
  );
}

export default About;
