import React from 'react';
import './Experiences.scss';

function Experiences() {
  return (
    <>

      <section className="experiences" aria-labelledby="experiences">

  <header className="section-header">
    <h4 className="section-header__title" id="experiences">Expériences</h4>
    <h5 className="section-header__subtitle">Un parcours riche en apprentissages</h5>
  </header>

  <p>Mon parcours professionnel m'a permis de développer...</p>

    </section>

    <img id="cv" src="src/assets/images/CV-AP.jpg" alt="Document CV" />

      
    </>
);
}

export default Experiences;
