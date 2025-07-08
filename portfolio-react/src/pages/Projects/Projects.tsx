import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FaPlay, FaPause } from 'react-icons/fa';
import './Projects.scss';
import projectsData from '../../../data/projects.json';
import iconMap from './IconMap';

function Projects() {
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
      <button className="projects__arrow slick-prev" aria-label="Précédent"></button>
    ),
    nextArrow: (
      <button className="projects__arrow slick-next" aria-label="Suivant"></button>
    ),
  };

  const toggleAutoplay = () => setAutoplay(!autoplay);

  return (
    <section className="projects section-anchor" aria-labelledby="projects">
      <header className="projects__header">
        <h3 className="projects__title" id="projects">
          Vous voulez découvrir mes créations ?
        </h3>
        <h4 className="projects__subtitle">
          Découvrez mes projets, du développement web à la création visuelle !
        </h4>
        <button
          className="projects__toggle"
          onClick={toggleAutoplay}
          aria-label={
            autoplay
              ? 'Arrêter le défilement automatique'
              : 'Reprendre le défilement automatique'
          }
        >
          {autoplay ? <FaPause /> : <FaPlay />}
        </button>
      </header>

      <article className="projects__content" aria-live="polite">
        <Slider {...settings} className="projects__carousel">
          {projectsData.map((project, index) => (
            <article key={index} className="projects__slide">
              <h5 className="projects__project-title">{project.title}</h5>
              <figure>
                <img
                  src={project.image}
                  alt={project.title}
                  className="projects__image"
                />
                <figcaption className="projects__description">
                  {project.description}
                </figcaption>
              </figure>
              <section className="projects__tech">
  {project.technologies.map((tech) => {
    const IconComponent = iconMap[tech.icon];
    return (
      <span key={tech.name} className="project-tech">
        {IconComponent && (
          <span className="project-tech__icon"><IconComponent /></span>
        )}
        <p className="project-tech__name">{tech.name}</p>
      </span>
    );
  })}
</section>

            </article>
          ))}
        </Slider>
      </article>
    </section>
  );
}

export default Projects;
