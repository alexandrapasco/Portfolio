// src/components/Footer/Footer.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.scss';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      {t('footer.copyright')}
    </footer>
  );
}

export default Footer;
