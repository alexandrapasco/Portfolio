import Button from '../../App/components/Button/Button';
import './Contact.scss';

function Contact() {
  return (
    <section className="contact section-anchor" aria-labelledby="contact">
      
      <header className="contact__header">
        <h3 className="contact__title" id="contact">Vous souhaitez me contacter ?</h3>
        <h4 className="contact__subtitle">Une question, un projet, une collaboration ? Écrivons la suite ensemble !</h4>
      </header>

      <article className="contact__container">
        
        {/* Formulaire de contact */}
        <form className="contact__form" aria-labelledby="contact-title">
          <fieldset className="contact__fieldset">
            <legend className="contact__legend">Informations personnelles</legend>
            <label className="contact__label" htmlFor="name">Nom *</label>
            <input className="contact__input" type="text" id="name" name="name" required />

            <label className="contact__label" htmlFor="firstname">Prénom</label>
            <input className="contact__input" type="text" id="firstname" name="firstname" />
          </fieldset>

          <fieldset className="contact__fieldset">
            <legend className="contact__legend">Coordonnées</legend>
            <label className="contact__label" htmlFor="email">E-mail *</label>
            <input className="contact__input" type="email" id="email" name="email" required />

            <label className="contact__label" htmlFor="phone">Téléphone *</label>
            <input className="contact__input" type="tel" id="phone" name="phone" required />
          </fieldset>

          <fieldset className="contact__fieldset">
            <legend className="contact__legend">Votre message</legend>
            <label className="contact__label" htmlFor="subject">Objet</label>
            <input className="contact__input" type="text" id="subject" name="subject" />

            <label className="contact__label" htmlFor="message">Message</label>
            <textarea className="contact__textarea" id="message" name="message" rows="5"></textarea>
          </fieldset>

          <div aria-live="polite" className="contact__error"></div>

            <Button type="submit" className="contact__button">Envoyer</Button>
          </form>
        
        {/* Infos de contact */}
        <aside className="contact__info">
          <ul className="contact__list">
            <li className="contact__item">
              <img className="contact__icon" src="/icons/phone.svg" alt="Icône téléphone" />
              06.29.32.08.48
            </li>
            <li className="contact__item">
              <img className="contact__icon" src="/icons/email.svg" alt="Icône email" />
              <a href="mailto:s.alexandra.pasco@gmail.com">s.alexandra.pasco@gmail.com</a>
            </li>
            <li className="contact__item">
              <img className="contact__icon" src="/icons/linkedin.svg" alt="Icône LinkedIn" />
              <a href="https://linkedin.com/in/alexandrapasco" target="_blank" rel="noopener noreferrer">alexandrapasco</a>
            </li>
            <li className="contact__item">
              <img className="contact__icon" src="/icons/github.svg" alt="Icône GitHub" />
              <a href="https://github.com/alexandrapasco" target="_blank" rel="noopener noreferrer">alexandrapasco</a>
            </li>
            <li className="contact__item">
              <img className="contact__icon" src="/icons/map.svg" alt="Icône localisation" />
              <a href="https://www.google.com/maps/place/78120+Rambouillet" target="_blank" rel="noopener noreferrer">
                78120 Rambouillet
              </a>
            </li>
          </ul>
        </aside>
      </article>
    </section>
  );
}

export default Contact;
