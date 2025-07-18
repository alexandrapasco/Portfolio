import './Brand.scss';
import { useTranslation } from 'react-i18next';
import { FaSearch, FaGraduationCap, FaClock } from 'react-icons/fa';

function Brand() {
  const { t } = useTranslation('common');

  return (
    <section className="brand">
      <h1 className="brand__title">{t('brand.title')}</h1>
      <h2 className="brand__subtitle">{t('brand.subtitle')}</h2>
      <p className="brand__paragraph">
        <FaSearch aria-hidden="true" /> {t('brand.search')}<br />
        <FaGraduationCap aria-hidden="true" /> {t('brand.degree')}<br />
        <FaClock aria-hidden="true" /> {t('brand.rhythm')}
      </p>
    </section>
  );
}

export default Brand;
