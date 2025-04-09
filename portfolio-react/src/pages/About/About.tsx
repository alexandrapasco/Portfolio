import React from 'react';
import Button from '../../App/components/Button/Button';
import '../../App/components/Button/Button.scss';
import './About.scss';

function About() {
  return (
    <section className="about section-anchor" aria-labelledby="about">

      <article className="about__content">
        
        <h5 className="about__tagline">Inclusif et visible, mais pas sans style</h5>
        <p className="about__text">
        Pourquoi un site accessible devrait-il être ennuyeux ? Les personnes malvoyantes, ou avec d’autres handicaps, ont autant le droit de profiter d’un web joli, intuitif et agréable.           
        <br /><br />
        Pourtant, beaucoup de sites négligent ces aspects : des slides automatiques impossibles à stopper, des couleurs mal choisies, des boutons introuvables… Et si on faisait mieux ?          
        <br /><br />
        Pour moi, l’accessibilité et le design ne sont pas opposés : ils se complètent. Un site peut être beau, bien référencé, et surtout, pensé pour tous. 
        <br /><br />
        C’est cette vision inclusive et créative du web qui me passionne, et que je veux transmettre dans chacun de mes projets.       
        </p>

        {/* Bouton qui redirige vers l'ancre "Presentation" */}
        <Button text="En savoir plus" href="#profile" as="a" />


      </article>

    </section>
  );
}

export default About;
