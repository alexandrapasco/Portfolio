// src/pages/Error404/Error404.jsx
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Error404.scss';
import errorImage from '/images/404.webp';

const Error404 = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.classList.add('body-error');
    return () => document.body.classList.remove('body-error');
  }, []);

  return (
    <main className="not-found" role="main" aria-label={t('error.aria')}>
      <h1>{t('error.title')}</h1>
      <p>{t('error.text')}</p>
      <img
        src={errorImage}
        alt={t('error.imageAlt')}
        className="not-found__image"
      />
      <Link to="/" className="not-found__link">{t('error.backHome')}</Link>
    </main>
  );
};

export default Error404;
