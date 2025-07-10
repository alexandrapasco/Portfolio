import { useState } from 'react';
import Button from '../../App/components/Button/Button';
import './Contact.scss';

function Contact() {
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/movddbee', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatusMessage('Merci pour votre message ! ✅ Je vous répondrai rapidement.');
        form.reset();
      } else {
        const data = await response.json();
        if (data.errors) {
          setStatusMessage(`❌ ${data.errors.map((error: any) => error.message).join(', ')}`);
        } else {
          setStatusMessage('❌ Une erreur est survenue, veuillez réessayer.');
        }
      }
    } catch {
      setStatusMessage('❌ Erreur réseau. Veuillez réessayer plus tard.');
    }

    setIsSubmitting(false);
  };

  return (
    <section className="contact section-anchor" aria-labelledby="contact">
      <header className="contact__header">
        <h3 className="contact__title" id="contact">Vous souhaitez me contacter ?</h3>
        <h4 className="contact__subtitle">Une question, un projet, une collaboration ? Écrivons la suite ensemble !</h4>
      </header>

      <article className="contact__container">
        <form
          className="contact__form"
          aria-labelledby="contact-title"
          aria-describedby="required-description"
          onSubmit={handleSubmit}
        >
          {/* Texte invisible pour lecteur d’écran : explique que les * sont obligatoires */}
          <p id="required-description" className="sr-only">
            Les champs marqués d’un astérisque (*) sont obligatoires.
          </p>

          <fieldset className="contact__fieldset">
            <label className="contact__label" htmlFor="name">
              Nom <span aria-hidden="true">*</span>
            </label>
            <input
              className="contact__input"
              type="text"
              id="name"
              name="name"
              required
              aria-required="true"
            />

            <label className="contact__label" htmlFor="firstname">Prénom</label>
            <input className="contact__input" type="text" id="firstname" name="firstname" />
          </fieldset>

          <fieldset className="contact__fieldset">
            <label className="contact__label" htmlFor="email">
              E-mail <span aria-hidden="true">*</span>
            </label>
            <input
              className="contact__input"
              type="email"
              id="email"
              name="email"
              required
              aria-required="true"
            />

            <label className="contact__label" htmlFor="phone">
              Téléphone <span aria-hidden="true">*</span>
            </label>
            <input
              className="contact__input"
              type="tel"
              id="phone"
              name="phone"
              required
              aria-required="true"
            />
          </fieldset>

          <fieldset className="contact__fieldset">
            <label className="contact__label" htmlFor="subject">Objet</label>
            <input className="contact__input" type="text" id="subject" name="subject" />

            <label className="contact__label" htmlFor="message">Message</label>
            <textarea className="contact__textarea" id="message" name="message" rows={5}></textarea>
          </fieldset>

          {/* Message de statut d'envoi */}
          <div aria-live="polite" className="contact__error">
            {statusMessage && <p>{statusMessage}</p>}
          </div>

          {/* Bouton d’envoi avec état de chargement */}
          <Button className="contact__button" disabled={isSubmitting}>
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
          </Button>
        </form>

        {/* Coordonnées de contact */}
        <aside className="contact__info">
          <ul className="contact__list">
            <li className="contact__item">
              <a href="tel:0629320848">
                <img className="contact__icon" src="/icons/phone.svg" alt="Icône téléphone" />
                <span className="contact__text">06.29.32.08.48</span>
              </a>
            </li>
            <li className="contact__item">
              <a href="mailto:s.alexandra.pasco@gmail.com">
                <img className="contact__icon" src="/icons/email.svg" alt="Icône email" />
                <span className="contact__text">s.alexandra.pasco@gmail.com</span>
              </a>
            </li>
            <li className="contact__item">
              <a href="https://linkedin.com/in/alexandrapasco" target="_blank" rel="noopener noreferrer">
                <img className="contact__icon" src="/icons/linkedin.svg" alt="Icône LinkedIn" />
                <span className="contact__text">alexandrapasco</span>
              </a>
            </li>
            <li className="contact__item">
              <a href="https://github.com/alexandrapasco" target="_blank" rel="noopener noreferrer">
                <img className="contact__icon" src="/icons/github.svg" alt="Icône GitHub" />
                <span className="contact__text">alexandrapasco</span>
              </a>
            </li>
            <li className="contact__item">
              <a href="https://www.google.com/maps/place/78120+Rambouillet" target="_blank" rel="noopener noreferrer">
                <img className="contact__icon" src="/icons/map.svg" alt="Icône localisation" />
                <span className="contact__text">78120 Rambouillet</span>
              </a>
            </li>
          </ul>
        </aside>
      </article>
    </section>
  );
}

export default Contact;
