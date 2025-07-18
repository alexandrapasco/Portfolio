import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FaPlay, FaPause } from 'react-icons/fa';
import './Projects.scss';
import projectsData from '../../../data/projects.json';
import iconMap from './IconMap';

function Projects() {
  const { t } = useTranslation();
  const [autoplay, setAutoplay] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: (
      <button className="projects__arrow slick-prev" aria-label={t('projects.prev')} />
    ),
    nextArrow: (
      <button className="projects__arrow slick-next" aria-label={t('projects.next')} />
    ),
  };

  const toggleAutoplay = () => setAutoplay(!autoplay);

  return (
    <section className="projects section-anchor" aria-labelledby="projects">
      <header className="projects__header">
        <h3 className="projects__title" id="projects">{t('projects.title')}</h3>
        <h4 className="projects__subtitle">{t('projects.subtitle')}</h4>
      </header>

      <article className="projects__content" aria-live="polite">
        <Slider {...settings} className="projects__carousel">
          {projectsData.map((project, index) => (
            <article key={index} className="projects__slide">
              <h5 className="projects__project-title">{t(`projects.items.${index}.title`)}</h5>
              <figure>
                <img src={project.image} alt={project.title} className="projects__image" />
                <figcaption className="projects__description">{t(`projects.items.${index}.description`)}</figcaption>
              </figure>

              <section className="projects__tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="projects__tech-item" aria-label={tech.name}>
                    {iconMap[tech.icon] ?? null}
                    <p>{tech.name}</p>
                  </span>
                ))}
              </section>

              {project.links && (
                <section className="projects__links">
                  <h6 className="projects__social-title">{t('projects.socialTitle')}</h6>
                  <span className="projects__social-icons">
                    {Object.entries(project.links).map(([key, url]) => {
                      const iconKey = {
                        facebook: 'FaFacebook',
                        instagram: 'FaInstagram',
                        linkedin: 'FaLinkedin',
                        site: null
                      }[key];

                      return (
                        iconKey && (
                          <a
                            key={key}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projects__social-link"
                            aria-label={key}
                          >
                            {iconMap[iconKey]}
                          </a>
                        )
                      );
                    })}
                  </span>
                </section>
              )}
            </article>
          ))}
        </Slider>
      </article>
      <button
        className="projects__toggle"
        onClick={toggleAutoplay}
        aria-label={autoplay ? t('projects.stopAutoplay') : t('projects.startAutoplay')}
      >
        {autoplay ? <FaPause /> : <FaPlay />}
      </button>
    </section>
  );
}

export default Projects;
