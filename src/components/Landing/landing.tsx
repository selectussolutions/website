import { ChangeEventHandler, ReactElement } from 'react';
import { useI18nContext } from '../../i18n/i18n-react';
import { locales } from '../../i18n/i18n-util';
import { Locales } from '../../i18n/i18n-types';
import { loadLocaleAsync } from '../../i18n/i18n-util.async';
import './styles.scss';

const Landing = (): ReactElement => {
  const { LL, locale, setLocale } = useI18nContext();

  const onLocaleSelected: ChangeEventHandler<HTMLSelectElement> = async ({
    target,
  }) => {
    const locale = target.value as Locales;
    localStorage.setItem('lang', locale);
    await loadLocaleAsync(locale);
    setLocale(locale);
  };

  return (
    <div className='landing-container'>
      <div className='landing-header'>
        <img
          src='static/images/logo_white.png'
          alt='header-logo'
          className='header-logo'
        ></img>
        <div className='button-container'>
          <select
            value={locale || ''}
            onChange={onLocaleSelected}
            className='select-locale'
          >
            <option value='' disabled></option>
            {locales.map(locale => (
              <option key={locale} value={locale}>
                {locale.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='landing-content'>
        <div className='landing-text'>
          <h1>{LL.landing.title()}</h1>
          <h2>{LL.landing.subtitle()}</h2>
          <button
            className='button'
            onClick={() => (window.location.href = '/contacto')}
          >
            {LL.landing.button()}
          </button>
        </div>
        <div className='landing-images'>
          <img src='/static/images/img-landing1.png' alt='landing'></img>
        </div>
      </div>
    </div>
  );
};

export default Landing;
