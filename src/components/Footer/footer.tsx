import { ReactElement } from 'react';
import { useI18nContext } from '../../i18n/i18n-react';
import './styles.scss';

const Footer = (): ReactElement => {
  const { LL } = useI18nContext();

  return (
    <div className='footer-container'>
      <div className='footer-navigation'>
        <div className='topnav'>
          <a href='/'>{LL.header.inicio()}</a>
          <a href='/nosotros'>{LL.header.nosotros()}</a>
          <a href='#news'>{LL.header.servicios()}</a>
          <a href='#news'>{LL.header.productos()}</a>
        </div>
      </div>
      <div className='footer-icons'>
        <a
          href='https://facebook.com/selectussolutions'
          target='_blank'
          rel='noreferrer'
        >
          <img src='/static/images/icons/facebook_color.png' alt='Facebook' />
        </a>
        <a
          href='https://www.linkedin.com/company/selectussolutions/'
          target='_blank'
          rel='noreferrer'
        >
          <img src='/static/images/icons/linkedin_color.png' alt='LinkedIn' />
        </a>
        <a
          href='https://wa.me/573138138754?text=Hola,%20Select%20Us!%20'
          target='_blank'
          rel='noreferrer'
        >
          <img src='/static/images/icons/whatsapp_color.png' alt='whatsapp' />
        </a>
      </div>
      <div className='footer-separation'></div>
      <div className='footer-copyright'>Select* US Solutions Copyright</div>
    </div>
  );
};

export default Footer;
