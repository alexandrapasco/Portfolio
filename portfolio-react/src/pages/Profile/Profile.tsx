// import React from 'react';
import './Profile.scss';

function Profile() {
  return (
    <section className="profile section-anchor" aria-labelledby="profile">

      <header className="profile__header">
        <h3 className="profile__title" id="presentation">Qui suis-je ?</h3>
        <h4 className="profile__subtitle">Observer, comprendre, créer : ma vision du web.</h4>
      </header>

      <aside className="profile__details">

      <article className="profile__content">

      <h5 className="profile__tagline">Un parcours riche, atypique et authentique</h5>
        <p className="profile__text">
        D'abord photographe et comédienne, puis responsable en restauration, j’ai toujours évolué dans des milieux où l’humain est au cœur des échanges.
        <br /><br />
        Ces expériences m’ont permis de faire ressortir mon sens de l’écoute, de l’observation et de l’empathie, des qualités que j’applique aujourd’hui au développement web. J’aime concevoir des interfaces qui allient esthétique et accessibilité, en veillant à créer des expériences pensées pour tous.         
        <br /><br />
        Mon regard attentif me pousse à imaginer des solutions inclusives, tandis que ma créativité donne vie à des interfaces fluides et engageantes. Pour moi, le web est un terrain d’expression où technologie et sensibilité se rencontrent.
        </p>

      </article>

        <figure className="profile__profile">
          <img className="profile__photo" src="/src/assets/images/Picture-Profile.jpg" alt="Alexandra Pasco - Photo de profil" />
        </figure>

      </aside>
      
    </section>
  );
}

export default Profile;