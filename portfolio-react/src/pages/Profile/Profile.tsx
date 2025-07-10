import './Profile.scss';

function Profile() {
  return (
    <section className="profile section-anchor" aria-labelledby="profile">
      <header className="profile__header">
        <h3 className="profile__title" id="profile">Qui suis-je ?</h3>
        <h4 className="profile__subtitle">
          Observer, comprendre, créer : ma vision du web.
        </h4>
      </header>

      <aside className="profile__details">
        <article className="profile__content">
          <h5 className="profile__tagline">Un parcours riche, atypique et authentique</h5>
          <p className="profile__text">
            Je n'ai jamais eu un parcours tout tracé. J'ai exploré différents univers : d'abord
            photographe et comédienne, puis responsable en restauration. À chaque étape, l'humain a
            toujours été au cœur des échanges.
          </p>

          <p className="profile__text">
            Ces expériences m’ont permis de faire ressortir mon sens de l’écoute, de l’observation
            et de l’empathie — des qualités que j’applique aujourd’hui au développement web et à la
            gestion de communautés en ligne. Ce que j'aime, c'est créer des interfaces belles et
            accessibles, et concevoir des contenus qui parlent aux gens et les sensibilisent.
          </p>

          <p className="profile__text">
            C'est en devenant bénévole pour l'association {' '}
            <a
              className="profile__a"
              href="https://ecole-des-chats.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              l'École des Chats du Pays Houdanais
            </a>{' '}
            que j'ai découvert le community management. J'ai commencé par accueillir des chats
            traumatisés pour leur redonner confiance, puis on m'a confié la gestion des réseaux
            sociaux de l'association (
            <a
              className="profile__a"
              href="https://www.facebook.com/profile.php?id=61561436403399"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            ,{' '}
            <a
              className="profile__a"
              href="https://www.instagram.com/ecoledeschats/?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            ,{' '}
            <a
              className="profile__a"
              href="https://www.linkedin.com/company/association-l-%C3%A9cole-des-chats-du-pays-houdanais/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            ). J’ai adoré imaginer des visuels, écrire des textes optimisés, et surtout voir l’impact
            de mes publications. Ça m’a donné envie de faire ce métier !
          </p>

          <p className="profile__text">
            Aujourd’hui diplômée du Titre Professionnel de niveau 5 (Bac+2) "Développeur Web & Web Mobile" avec une{' '}
            <a
              className="profile__a"
              href="https://oqs.li/O7GZC8"
              target="_blank"
              rel="noopener noreferrer"
            >
              certification Opquast niveau avancé
            </a>
            , je poursuis sur cette voie en préparant un{' '}
            <a
              className="profile__a"
              href="https://www.iscod.fr/formation-bachelor-marketing-et-communication-en-alternance?"
              target="_blank"
              rel="noopener noreferrer"
            > 
               Bachelor en Marketing & Communication chez ISCOD
            </a>. Mon objectif ? Développer des stratégies digitales inclusives et percutantes, en
            restant fidèle à mes valeurs d’authenticité et de partage.
          </p>

          <p className="profile__text">
            Mon regard attentif me pousse à imaginer des solutions inclusives, tandis que ma
            créativité donne vie à des interfaces fluides et engageantes. Pour moi, le web est un
            terrain d’expression où technologie et sensibilité se rencontrent.
          </p>

          <p className="profile__text">
            Je recherche donc une alternance pour continuer à apprendre et à évoluer dans ce
            domaine !
          </p>
        </article>

        <figure className="profile__profile">
          <img
            className="profile__photo"
            src="/src/assets/images/Picture-Profile.jpg"
            alt="Alexandra Pasco - Photo de profil"
          />
        </figure>
      </aside>
    </section>
  );
}

export default Profile;
