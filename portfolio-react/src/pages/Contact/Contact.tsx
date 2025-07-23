import { useState } from 'react';
import Button from '../../App/components/Button/Button';
import './Contact.scss';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  type FormspreeError = { message: string };


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
        setStatusMessage(t('contact.success'));
        form.reset();
      } else {
        const data = await response.json();
        if (data.errors) {
          // setStatusMessage(`❌ ${data.errors.map((error: any) => error.message).join(', ')}`);
          setStatusMessage(`❌ ${data.errors.map((error: FormspreeError) => error.message).join(', ')}`);

        } else {
          setStatusMessage(t('contact.error'));
        }
      }
    } catch {
      setStatusMessage(t('contact.network'));
    }

    setIsSubmitting(false);
  };

  return (
    <section className="contact section-anchor" aria-labelledby="contact">
      <header className="contact__header">
        <h3 className="contact__title" id="contact">{t('contact.title')}</h3>
        <h4 className="contact__subtitle">{t('contact.subtitle')}</h4>
      </header>

      <article className="contact__container">
        <form
          className="contact__form"
          aria-labelledby="contact-title"
          aria-describedby="required-description"
          onSubmit={handleSubmit}
        >
          <p id="required-description" className="sr-only">
            {t('contact.required')}
          </p>

          <fieldset className="contact__fieldset">
            <label className="contact__label" htmlFor="name">
              {t('contact.lastname')} <span aria-hidden="true">*</span>
            </label>
            <input
              className="contact__input"
              type="text"
              id="name"
              name="name"
              required
              aria-required="true"
            />

            <label className="contact__label" htmlFor="firstname">{t('contact.firstname')}</label>
            <input className="contact__input" type="text" id="firstname" name="firstname" />
          </fieldset>

          <fieldset className="contact__fieldset">
            <label className="contact__label" htmlFor="email">
              {t('contact.email')} <span aria-hidden="true">*</span>
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
              {t('contact.phone')} <span aria-hidden="true">*</span>
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
            <label className="contact__label" htmlFor="subject">{t('contact.subject')}</label>
            <input className="contact__input" type="text" id="subject" name="subject" />

            <label className="contact__label" htmlFor="message">{t('contact.message')}</label>
            <textarea className="contact__textarea" id="message" name="message" rows={5}></textarea>
          </fieldset>

          <Button className="contact__button" disabled={isSubmitting}>
            {isSubmitting ? t('contact.sending') : t('contact.send')}
          </Button>

          <span aria-live="polite" className="contact__error">
            {statusMessage && <p>{statusMessage}</p>}
          </span>
        </form>

        <aside className="contact__info">
          <ul className="contact__list">
            <li className="contact__item">
              <a href="tel:0629320848">
                <img className="contact__icon" src="/icons/phone.svg" alt="Icône téléphone" />
                <span className="contact__text">{t('contact.contactInfo.phone')}</span>
              </a>
            </li>
            <li className="contact__item">
              <a href="mailto:s.alexandra.pasco@gmail.com">
                <img className="contact__icon" src="/icons/email.svg" alt="Icône email" />
                <span className="contact__text">{t('contact.contactInfo.email')}</span>
              </a>
            </li>
            <li className="contact__item">
              <a href="https://linkedin.com/in/alexandrapasco" target="_blank" rel="noopener noreferrer">
                <img className="contact__icon" src="/icons/linkedin.svg" alt="Icône LinkedIn" />
                <span className="contact__text">{t('contact.contactInfo.linkedin')}</span>
              </a>
            </li>
            <li className="contact__item">
              <a href="https://github.com/alexandrapasco" target="_blank" rel="noopener noreferrer">
                <img className="contact__icon" src="/icons/github.svg" alt="Icône GitHub" />
                <span className="contact__text">{t('contact.contactInfo.github')}</span>
              </a>
            </li>
            <li className="contact__item">
              <a href="https://www.google.com/maps/place/78120+Rambouillet" target="_blank" rel="noopener noreferrer">
                <img className="contact__icon" src="/icons/map.svg" alt="Icône localisation" />
                <span className="contact__text">{t('contact.contactInfo.location')}</span>
              </a>
            </li>
          </ul>
        </aside>
      </article>
    </section>
  );
}

export default Contact;
