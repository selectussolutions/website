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
            <h1>{LL.landing.title()}</h1>
            <h2>{LL.landing.subtitle()}</h2>
            <button
              className='button'
              onClick={() => (window.open('https://wa.me/573138138754?text=Hola,%20Select%20Us!%20', '_blank'))}
            >
              {LL.landing.button()}
            </button>
          </div>
          <div className='landing-images'>
            <img src='/static/images/img-landing1.png' alt='landing'></img>
          </div>
        </div>
      </div>
      <div className='landing-container'>
        <div className='landing-content about-us'>
          <div className='landing-text'>
            <div className='row'>
              <a href='/nosotros' className='link'>
                {LL.landing.aboutUs.link()}
              </a>
            </div>
            <h1>{LL.landing.aboutUs.title()}</h1>
            <h2>{LL.landing.aboutUs.text1()}</h2>
            <h2>{LL.landing.aboutUs.text2()}</h2>
            <div className='row'>
              <h2 className='blue-sub-title'>{LL.landing.aboutUs.text3()}</h2>
            </div>
          </div>
          <div className='landing-images'>
            <img src='/static/images/img-landing2.png' alt='landing'></img>
          </div>
        </div>
        <div className='row cards'>
          <div className='about-card'>
            <div className='card-icon'>
              <img src='/static/images/icons/headset.png' alt='landing'></img>
            </div>
            <div className='card-text'>
              <span>{LL.landing.aboutUs.clientsCount()}</span>
              <div className='card-sub-text'>
                {LL.landing.aboutUs.clients()}
              </div>
            </div>
          </div>
          <div className='about-card'>
            <div className='card-icon'>
              <img src='/static/images/icons/star.png' alt='landing'></img>
            </div>
            <div className='card-text'>
              <span>{LL.landing.aboutUs.starCount()}</span>
              <div className='card-sub-text'>
                {LL.landing.aboutUs.feedback()}
              </div>
            </div>
          </div>
          <div className='about-card'>
            <div className='card-icon'>
              <img src='/static/images/icons/diamond.png' alt='landing'></img>
            </div>
            <div className='card-text'>
              <span>{LL.landing.aboutUs.diamondCount()}</span>
              <div className='card-sub-text'>{LL.landing.aboutUs.brands()}</div>
            </div>
          </div>
        </div>
      </div>

      <div className='landing-container tech'>
        <div className='landing-content tech'>
          <div className='landing-text'>
            <div className='row'>
              <a href='/nosotros' className='link'>
                {LL.landing.technologies.link()}
              </a>
            </div>
            <h1>{LL.landing.technologies.title()}</h1>

            <div className='tabs-container'>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label='basic tabs example'
                >
                  <Tab label='Mobile' {...a11yProps(0)} className='tab-item' />
                  <Tab
                    label='Front end'
                    {...a11yProps(1)}
                    className='tab-item'
                  />
                  <Tab
                    label='Back end'
                    {...a11yProps(2)}
                    className='tab-item'
                  />
                  <Tab
                    label='Database'
                    {...a11yProps(3)}
                    className='tab-item'
                  />
                  <Tab
                    label='DevOps'
                    {...a11yProps(4)}
                    className='tab-item'
                  />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <div className='icons'>
                  <img
                    src='/static/images/icons/android.png'
                    alt='landing'
                  ></img>
                  <img src='/static/images/icons/ionic.png' alt='landing'></img>
                  <img src='/static/images/icons/swift.png' alt='landing'></img>
                  <img
                    src='/static/images/icons/reactNative.png'
                    alt='landing'
                  ></img>
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <div className='icons holder'>
                  <img
                    src='/static/images/icons/angular.png'
                    alt='landing'
                  ></img>
                  <img src='/static/images/icons/html.png' alt='landing'></img>
                  <img src='/static/images/icons/node.png' alt='landing'></img>
                  <img
                    src='/static/images/icons/react.png'
                    alt='landing'
                  ></img>
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <div className='icons holder'>
                  <img
                    src='/static/images/icons/java.png'
                    alt='landing'

                  ></img>
                  <img src='/static/images/icons/net.png' alt='landing'></img>
                  <img src='/static/images/icons/c.png' className='px-5' alt='landing'></img>
                  <img src='/static/images/icons/django.png' alt='landing'></img>
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                <div className='icons holder'>
                  <img
                    src='/static/images/icons/sql.png'
                    alt='landing'
                  ></img>
                  <img src='/static/images/icons/mysql.png' alt='landing'></img>
                  <img
                    src='/static/images/icons/postgresql.png'
                    alt='landing'
                  ></img>
                  <img src='/static/images/icons/azure.png' alt='landing'></img>
                </div>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={4}>
                <div className='icons holder'>
                  <img
                    src='/static/images/icons/angular.png'
                    alt='landing'
                  ></img>
                  <img src='/static/images/icons/html.png' alt='landing'></img>
                  <img src='/static/images/icons/node.png' alt='landing'></img>
                  <img
                    src='/static/images/icons/react.png'
                    alt='landing'
                  ></img>
                </div>
              </CustomTabPanel>
            </div>
          </div>
        </div>
      </div>

      <div className='div-services'>
        <div className='div-2-services'>
          <div className='row'>
            <a href='/servicios' className='link'>
              {LL.landing.services.link()}
            </a>
          </div>
          <div className='div-4-services'>{LL.landing.services.title()}</div>
          <div className='div-5-services'>
            <div className='div-6-services'>
              <div className='div-7-services'>
                {LL.landing.services.agileTitle()}
              </div>
              <div className='div-8-services'>
                {LL.landing.services.agileSubtitle()}
              </div>

              <img
                loading='lazy'
                src='/static/images/landing-cel.png'
                className='img-2'
              />
              <img
                loading='lazy'
                src='/static/images/landing-pc.png'
                className='img-3'
              />
            </div>
            <img
              loading='lazy'
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/94b1cd9b89a6dee9ebc820cc1cb3962dbb10233b34f40b2ef3e61a3c8972543b?apiKey=01d115c955404390bf34c116e3ccb7a1&'
              className='img-4-services'
            />
            <div className='div-9-services'>
              <div className='div-10-services'>
                <div className='div-11-services'>
                  <div className='column-services'>
                    <div className='div-12-services'>
                      <div className='div-13-services'>
                        {LL.landing.services.staffTitle()}
                      </div>
                      <div className='div-14-services'>
                        {LL.landing.services.staffSubtitle()}
                      </div>
                    </div>
                  </div>
                  <div className='column-2-services'>
                    <img
                      loading='lazy'
                      src='/static/images/landing-staff.png'
                      className='img-5-services'
                    />
                  </div>
                </div>
              </div>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/6d8291691ee7f7647e536828c08a09124b40895dd35b9a16b4489a068cf1185f?apiKey=01d115c955404390bf34c116e3ccb7a1&'
                className='img-6-services'
              />
              <div className='div-15-services'>
                <div className='div-16-services'>
                  {LL.landing.services.systemsTitle()}
                </div>
                <div className='div-17-services'>
                  {LL.landing.services.systemsSubtitle()}
                </div>
                <div className='div-18-services'>
                  <div className='div-19-services'>
                    <div className='column-3-services'>
                      <img
                        loading='lazy'
                        src='/static/images/landing-it-worker.png'
                        className='img-7-services'
                      />
                    </div>
                    <div className='column-4-services'>
                      <img
                        loading='lazy'
                        src='/static/images/company-employees.png'
                        className='img-8-services'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='div-20-services'>
            {' '}
            <button
              className='button'
              onClick={() => (window.open('https://wa.me/573138138754?text=Hola,%20Select%20Us!%20', '_blank'))}
            >
              {LL.landing.services.button()}
            </button>
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
              <img
                loading='lazy'
                src='/static/images/landing-clien1.png'
                className='img-testimonials'
              />
            </div>
            <div className='column-3-testimonials'>
              <img
                loading='lazy'
                src='/static/images/landing-clien2.png'
                className='img-2-testimonials'
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

export default Landing;
