import {
  SiHtml5, SiCss3, SiJavascript, SiReact,
  SiSequelize, SiPostgresql, SiNodedotjs,
  SiWordpress, SiAdobephotoshop, SiFigma, SiCanva,
  SiTrello, SiNotion, SiDiscord, SiGoogledrive, SiSass,
} from 'react-icons/si';

import {
  FaCheckCircle, FaLightbulb, FaUsers, FaSearch,
  FaUserCheck, FaComments, FaTools, FaHeart,
  FaLinkedin, FaInstagram, FaFacebook,
} from 'react-icons/fa';

import Button from '../../App/components/Button/Button';
import './Skills.scss';
import { useTranslation } from 'react-i18next';

function Skills(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section className="skills section-anchor" aria-labelledby="skills">
      {/* ✅ Ajout image LCP en balise <img /> */}
      <img
        src="/images/Fond-Bureau2.webp"
        alt="Fond de bureau"
        className="skills__background"
        width="1920"
        height="1080"
        fetchPriority="high"
        decoding="async"
      />

      <header className="skills__header">
        <h3 className="skills__title" id="skills">{t('skills.title')}</h3>
        <h4 className="skills__subtitle">{t('skills.subtitle')}</h4>
      </header>

      <aside className="skills__cards">

        <article className="skills__card">
          <h5 className="skills__card-title">{t('skills.hard')}</h5>
          <ul className="skills__icons">
            <li className="skills__icon-item"><SiHtml5 /><p>HTML</p></li>
            <li className="skills__icon-item"><SiCss3 /><p>CSS</p></li>
            <li className="skills__icon-item"><SiJavascript /><p>JavaScript</p></li>
            <li className="skills__icon-item"><SiReact /><p>React</p></li>
            <li className="skills__icon-item"><SiSequelize /><p>Sequelize</p></li>
            <li className="skills__icon-item"><SiPostgresql /><p>PostgreSQL</p></li>
            <li className="skills__icon-item"><SiNodedotjs /><p>Node.js</p></li>
            <li className="skills__icon-item"><SiSass /><p>Sass</p></li>
          </ul>
        </article>

        <article className="skills__card">
          <h5 className="skills__card-title">{t('skills.tools')}</h5>
          <ul className="skills__icons">
            <li className="skills__icon-item"><SiWordpress /><p>WordPress</p></li>
            <li className="skills__icon-item"><SiAdobephotoshop /><p>Photoshop</p></li>
            <li className="skills__icon-item"><SiFigma /><p>Figma</p></li>
            <li className="skills__icon-item"><SiCanva /><p>Canva</p></li>
            <li className="skills__icon-item"><SiTrello /><p>Trello</p></li>
            <li className="skills__icon-item"><SiNotion /><p>Notion</p></li>
            <li className="skills__icon-item"><SiDiscord /><p>Discord</p></li>
            <li className="skills__icon-item"><SiGoogledrive /><p>Google Drive</p></li>
            <li className="skills__icon-item">
              <span className="social-icons">
                <FaLinkedin size={28} />
                <FaInstagram size={28} />
                <FaFacebook size={28} />
              </span>
              <p>{t('skills.social')}</p>
            </li>
          </ul>
        </article>

        <article className="skills__card">
          <h5 className="skills__card-title">{t('skills.soft')}</h5>
          <ul className="skills__icons">
            <li className="skills__icon-item"><FaCheckCircle /><p>{t('skills.list.organisation')}</p></li>
            <li className="skills__icon-item"><FaHeart /><p>{t('skills.list.empathy')}</p></li>
            <li className="skills__icon-item"><FaLightbulb /><p>{t('skills.list.creativity')}</p></li>
            <li className="skills__icon-item"><FaSearch /><p>{t('skills.list.curiosity')}</p></li>
            <li className="skills__icon-item"><FaComments /><p>{t('skills.list.communication')}</p></li>
            <li className="skills__icon-item"><FaUserCheck /><p>{t('skills.list.autonomy')}</p></li>
            <li className="skills__icon-item"><FaTools /><p>{t('skills.list.versatility')}</p></li>
            <li className="skills__icon-item"><FaUsers /><p>{t('skills.list.collaboration')}</p></li>
          </ul>
        </article>

      </aside>

      <Button
        className="button-download-cv"
        text={t('skills.cv')}
        as="a"
        href="/docs/CV_Alexandra_PASCO.pdf"
        download
      />
    </section>
  );
}

export default Skills;
