import { ChangeEventHandler, ReactElement, useState } from 'react';
import { useI18nContext } from '../../i18n/i18n-react';
import { locales } from '../../i18n/i18n-util';
import { Locales } from '../../i18n/i18n-types';
import { loadLocaleAsync } from '../../i18n/i18n-util.async';
import './styles.scss';
import { Box, Tab, Tabs, Typography } from '@mui/material';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const LandingBiometricos = (): ReactElement => {
  const { LL, locale, setLocale } = useI18nContext();

  const onLocaleSelected: ChangeEventHandler<HTMLSelectElement> = async ({
    target,
  }) => {
    const locale = target.value as Locales;
    localStorage.setItem('lang', locale);
    await loadLocaleAsync(locale);
    setLocale(locale);
  };

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      'id': `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  function truncateSelectUs(text: string): import('react').ReactNode {
    return text.length > 100 ? text.substring(0, 100) + '...' : text;
  }

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role='tabpanel'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && children}
      </div>
    );
  }

  return (
    <>
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
              className='select-locale-landing'
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
            <h1>{LL.landingBiometricos.title()}</h1>
            <h2>{LL.landingBiometricos.subtitle()}</h2>
            <button
              className='button'
              onClick={() => (window.open('https://wa.me/573138138754?text=Hola,%20Select%20Us!%20', '_blank'))}
            >
              {LL.landing.button()}
            </button>
          </div>
          <div className='landing-images'>
            <img src='/static/images/img-landing-biometricos.png' alt='landing'></img>
          </div>
        </div>
      </div>


      <div className='landing-container tech'>
        <div className='landing-content tech'>
          <div className='landing-text'>

            <h1>{LL.landingBiometricos.productos.title()}</h1>

            <div className='tabs-container'>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label='basic tabs example'
                >
                  <Tab label='Dispositivos' {...a11yProps(0)} className='tab-item' />
                  <Tab
                    label='Software'
                    {...a11yProps(1)}
                    className='tab-item'
                  />

                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>

                <div className='icons'>
                  <img src='/static/images/products/MB10VL.png' className='img-dispositivo-2' alt='landing'></img>
                  <img src='/static/images/products/M4.png' className='img-dispositivo' alt='landing'></img>
                  <img src='/static/images/products/MB560VL.png' className='img-dispositivo' alt='landing'></img>
                  <img src='/static/images/products/EFACE10.png' className='img-dispositivo' alt='landing'></img>
                </div>

              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>

                <div>
                  <img src='/static/images/products/biotime.png' className='m-5' alt='landing'></img>
                  <img src='/static/images/ZKBioSecurity1.png'  className='m-5' alt='landing'></img>
                </div>
              </CustomTabPanel>

            </div>
          </div>
        </div>
      </div>



      <div className='div-testimonials'>
        <div className='div-2-testimonials'>
          <div className='div-3-testimonials'>
            <div className='column-testimonials'>
              <div className='div-4-testimonials'>
                <div className='row'>
                  <a href='/nosotros' className='link'>
                    {LL.landing.testimonials.link()}
                  </a>
                </div>

                <div className='div-7-testimonials'>
                  {LL.landing.testimonials.title()}
                </div>
                <div className='div-8-testimonials'>
                  {LL.landing.testimonials.testimonial1()}
                </div>
                <div className='div-9-testimonials'>
                  {LL.landing.testimonials.client1()}
                </div>
                <div className='div-10-testimonials'>
                  {LL.landing.testimonials.jobTitle1()}
                </div>
              </div>
            </div>
            <div className='column-2-testimonials'>

              <video className='img-testimonials' controls>
                <source src="/static/images/video-damasa.mp4" type="video/mp4" />
              </video>

            </div>
            <div className='column-3-testimonials'>
              <img
                loading='lazy'
                src='/static/images/landing-clien2.jpg'
                className='img-2-testimonials d-none d-sm-block'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='div-footer'>
        <div className='div-2-footer'>
          <div className='div-3-footer'>
            <div className='column-footer'>
              <div className='div-4-footer'>
                <div className='div-5-footer'> {LL.landing.idea.title()}</div>
                <div className='div-6-footer'>{LL.landing.idea.subtitle()}</div>
              </div>
            </div>
            <div className='column-2-footer'>
              <button
                className='button'
                onClick={() => (window.open('https://wa.me/573138138754?text=Hola,%20Select%20Us!%20', '_blank'))}
              >
                {LL.landing.idea.button()}
              </button>
            </div>
          </div>
        </div>{' '}
        <div className='div-8-footer'>
          <div className='div-9-footer'>
            <img
              loading='lazy'
              src='/static/images/backgroundFooter.png'
              className='img-footer'
            />{' '}
            <div className='div-10-footer'>


              <div className='footer-icons'>
                <a
                  href='https://facebook.com/selectussolutions'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src='/static/images/icons/facebook_color.png'
                    alt='Facebook'
                  />
                </a>
                <a
                  href='https://www.linkedin.com/company/selectussolutions/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src='/static/images/icons/linkedin_color.png'
                    alt='LinkedIn'
                  />
                </a>
                <a
                  href='https://wa.me/573138138754?text=Hola,%20Select%20Us!%20'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src='/static/images/icons/whatsapp_color.png'
                    alt='whatsapp'
                  />
                </a>
              </div>


              {/* <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/738491bb68b7ad7b8c7415a8e3cedfe5add3802fbf2ec79569a295c9d3d80ea4?apiKey=01d115c955404390bf34c116e3ccb7a1&'
                className='img-2-footer'
              />{' '}
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/5b42af1dd79566102a250f6aa6a55b12f4d0f2160a2b9b3e7e2b017d55217ca9?apiKey=01d115c955404390bf34c116e3ccb7a1&'
                className='img-3-footer'
              />{' '} */}


            </div>


            <div className='whats-app-image-container'>
              <div className='div-11-footer'>
                Select* US Solutions Copyright
              </div>

              {/* <a
                  href='https://wa.me/573138138754?text=Hola,%20Select%20Us!%20'
                  target='_blank'
                  rel='noreferrer'
                >
                  
                  <img
                    src='/static/images/wpp.png'
                    alt='whatsapp'
                  />
                </a> */}



              {/* <img
                  loading='lazy'
                  src='/static/images/wpp.png'
                  className='img-4-footer'
                  onClick={() => (window.open('https://wa.me/573138138754?text=Hola,%20Select%20Us!%20', '_blank'))}
                /> */}


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingBiometricos;
