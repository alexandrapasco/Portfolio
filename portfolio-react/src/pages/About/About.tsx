import Button from '../../App/components/Button/Button';
import '../../App/components/Button/Button.scss';
import './About.scss';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <section className="about section-anchor" aria-labelledby="about">
      {/* ✅ Ajout de l'image comme élément HTML pour remplacer le background-image */}
      <img
        src="/images/Fond-Bureau.webp"
        alt="Fond de bureau"
        className="about__background"
        width="1920"
        height="1080"
        fetchPriority="high"
        decoding="async"
      />

      <article className="about__content">
        <h5 className="about__tagline">{t('about.tagline')}</h5>

        <p className="about__text">
          {t('about.paragraph1')}<br /><br />
          {t('about.paragraph2')}<br /><br />
          {t('about.paragraph3')}<br /><br />
          {t('about.paragraph4')}
        </p>

        <Button text={t('about.button')} href="#profile" as="a" />
      </article>
    </section>
  );
}

export default About;
