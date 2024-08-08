import React from 'react';
import './About.scss';

function About() {
  return (
    <div className="about">
      <div className="title-container">
        <h4 className="title" id="about">À propos</h4>
      </div>
      <p className="about__text">
      Issue d'une formation dans la photographie puis le théâtre, j'ai poursuivie une partie de ma carrière dans le domaine artistique à travers des projets divers et variés en tant que photographe, comédienne et modèle.

Ayant envie de changements et de découvertes, je me suis tournée vers la restauration, un métier qui m'a toujours fascinée, alors j'ai pris un poste de serveuse et j'ai évolué jusqu'à responsable de salle. Cette expérience très enrichissante a duré six ans.

Ce milieu ne donnant que peu de temps à la vie personnelle, j'ai décidé de changer de voie aujourd'hui. Passionnée par les nouvelles technologies et le numérique, je me suis naturellement orientée vers le développement web. Afin d'acquérir les compétences nécessaires, j'ai commencé à me former sur OpenClassrooms et sur des tutos YouTube en autodidacte. Actuellement, je suis une formation bootcamp « Développeur Web et Web Mobile » en vu d'un diplôme de niveau 5 (bac +2) en téléprésentiel (798H) chez O'Clock et je suis à la recherche d'un stage de 2 mois (minimum) à 6 mois (idéalement) afin d'élargir mon cercle de compétences tout en me construisant une première expérience professionnelle.

J'aime le travail en équipe, apprendre de nouvelles notions, relever des défis et j'aimerais mettre à profit ma créativité dans ce domaine.
      </p>
      <div className="about__informations">
      <img id="photo_profil" src="/src/assets/images/Photo_Profil.jpeg" alt="Photo Profil" />
<a className="button__linkedin" href="https://www.linkedin.com/in/alexandrapasco/" target="_blank">
  <img id="logo-linkedin" src="/src/assets/images/logo-linkdedin2.png" alt="LinkedIn" />
</a>

        <iframe className="about__map" src="https://www.google.com/maps/embed?..."></iframe>
      </div>
    </div>
  );
}

export default About;
