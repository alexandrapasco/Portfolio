import './Profile.scss';
import PictureProfile from "/images/Picture-Profile.webp";
import { useTranslation } from 'react-i18next';

function Profile() {
  const { t } = useTranslation();

  return (
    <section className="profile section-anchor" aria-labelledby="profile">
      <header className="profile__header">
        <h3 className="profile__title" id="profile">{t('profile.title')}</h3>
        <h4 className="profile__subtitle">{t('profile.subtitle')}</h4>
      </header>

      <aside className="profile__details">
        <article className="profile__content">
          <h5 className="profile__tagline">{t('profile.tagline')}</h5>

          <p className="profile__text">{t('profile.p1')}</p>
          <p className="profile__text">{t('profile.p2')}</p>

          <p className="profile__text">
            {t('profile.p3a')}
            <a
              className="profile__a"
              href="https://ecole-des-chats.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              l'École des Chats du Pays Houdanais
            </a>
            {t('profile.p3b')}
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
            {t('profile.p3c')}
          </p>

          <p className="profile__text">
            {t('profile.p4a')}
            <a
              className="profile__a"
              href="https://oqs.li/O7GZC8"
              target="_blank"
              rel="noopener noreferrer"
            >
              certification Opquast niveau avancé
            </a>
            {t('profile.p4b')}
            <a
              className="profile__a"
              href="https://www.iscod.fr/formation-bachelor-marketing-et-communication-en-alternance?"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bachelor en Marketing & Communication chez ISCOD
            </a>
            {t('profile.p4c')}
          </p>

          <p className="profile__text">{t('profile.p5')}</p>
          <p className="profile__text">{t('profile.p6')}</p>
        </article>

        <figure className="profile__profile">
          <img
            className="profile__photo"
            src={PictureProfile}
            alt="Alexandra Pasco - Photo de profil"
          />
        </figure>
      </aside>
    </section>
  );
}

export default Profile;
