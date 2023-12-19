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
                Item Two
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                Item Three
              </CustomTabPanel>
            </div>
          </div>
        </div>
      </div>

      <div className='div-services'>
        <div className='div-2-services'>
          <div className='row'>
            <a href='/nosotros' className='link'>
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
                srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/4df141c6280023eb8f0ef2d7e105e08e50928ce5f35256cdc6929f32da8ccaed?apiKey=01d115c955404390bf34c116e3ccb7a1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4df141c6280023eb8f0ef2d7e105e08e50928ce5f35256cdc6929f32da8ccaed?apiKey=01d115c955404390bf34c116e3ccb7a1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4df141c6280023eb8f0ef2d7e105e08e50928ce5f35256cdc6929f32da8ccaed?apiKey=01d115c955404390bf34c116e3ccb7a1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4df141c6280023eb8f0ef2d7e105e08e50928ce5f35256cdc6929f32da8ccaed?apiKey=01d115c955404390bf34c116e3ccb7a1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4df141c6280023eb8f0ef2d7e105e08e50928ce5f35256cdc6929f32da8ccaed?apiKey=01d115c955404390bf34c116e3ccb7a1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4df141c6280023eb8f0ef2d7e105e08e50928ce5f35256cdc6929f32da8ccaed?apiKey=01d115c955404390bf34c116e3ccb7a1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4df141c6280023eb8f0ef2d7e105e08e50928ce5f35256cdc6929f32da8ccaed?apiKey=01d115c955404390bf34c116e3ccb7a1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4df141c6280023eb8f0ef2d7e105e08e50928ce5f35256cdc6929f32da8ccaed?apiKey=01d115c955404390bf34c116e3ccb7a1&'
                className='img-2'
              />
              <img
                loading='lazy'
                srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/32f3a3deea51dde85d8fb20f971ad570c4aa9a7b3516b51b6a8bcb688be10309?apiKey=01d115c955404390bf34c116e3ccb7a1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/32f3a3deea51dde85d8fb20f971ad570c4aa9a7b3516b51b6a8bcb688be10309?apiKey=01d115c955404390bf34c116e3ccb7a1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32f3a3deea51dde85d8fb20f971ad570c4aa9a7b3516b51b6a8bcb688be10309?apiKey=01d115c955404390bf34c116e3ccb7a1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/32f3a3deea51dde85d8fb20f971ad570c4aa9a7b3516b51b6a8bcb688be10309?apiKey=01d115c955404390bf34c116e3ccb7a1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/32f3a3deea51dde85d8fb20f971ad570c4aa9a7b3516b51b6a8bcb688be10309?apiKey=01d115c955404390bf34c116e3ccb7a1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32f3a3deea51dde85d8fb20f971ad570c4aa9a7b3516b51b6a8bcb688be10309?apiKey=01d115c955404390bf34c116e3ccb7a1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/32f3a3deea51dde85d8fb20f971ad570c4aa9a7b3516b51b6a8bcb688be10309?apiKey=01d115c955404390bf34c116e3ccb7a1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/32f3a3deea51dde85d8fb20f971ad570c4aa9a7b3516b51b6a8bcb688be10309?apiKey=01d115c955404390bf34c116e3ccb7a1&'
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
                      srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/f5815ffd6220a8b1c63b714d12686caf4c9c98d9b0a55fc82050cf2ea690628f?apiKey=01d115c955404390bf34c116e3ccb7a1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5815ffd6220a8b1c63b714d12686caf4c9c98d9b0a55fc82050cf2ea690628f?apiKey=01d115c955404390bf34c116e3ccb7a1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5815ffd6220a8b1c63b714d12686caf4c9c98d9b0a55fc82050cf2ea690628f?apiKey=01d115c955404390bf34c116e3ccb7a1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5815ffd6220a8b1c63b714d12686caf4c9c98d9b0a55fc82050cf2ea690628f?apiKey=01d115c955404390bf34c116e3ccb7a1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5815ffd6220a8b1c63b714d12686caf4c9c98d9b0a55fc82050cf2ea690628f?apiKey=01d115c955404390bf34c116e3ccb7a1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5815ffd6220a8b1c63b714d12686caf4c9c98d9b0a55fc82050cf2ea690628f?apiKey=01d115c955404390bf34c116e3ccb7a1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5815ffd6220a8b1c63b714d12686caf4c9c98d9b0a55fc82050cf2ea690628f?apiKey=01d115c955404390bf34c116e3ccb7a1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5815ffd6220a8b1c63b714d12686caf4c9c98d9b0a55fc82050cf2ea690628f?apiKey=01d115c955404390bf34c116e3ccb7a1&'
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
                        srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/df254c01a48bd97c7118bbfb4ba448d9060cc616d90159961b0451ef3eb84573?apiKey=01d115c955404390bf34c116e3ccb7a1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/df254c01a48bd97c7118bbfb4ba448d9060cc616d90159961b0451ef3eb84573?apiKey=01d115c955404390bf34c116e3ccb7a1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/df254c01a48bd97c7118bbfb4ba448d9060cc616d90159961b0451ef3eb84573?apiKey=01d115c955404390bf34c116e3ccb7a1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/df254c01a48bd97c7118bbfb4ba448d9060cc616d90159961b0451ef3eb84573?apiKey=01d115c955404390bf34c116e3ccb7a1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/df254c01a48bd97c7118bbfb4ba448d9060cc616d90159961b0451ef3eb84573?apiKey=01d115c955404390bf34c116e3ccb7a1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/df254c01a48bd97c7118bbfb4ba448d9060cc616d90159961b0451ef3eb84573?apiKey=01d115c955404390bf34c116e3ccb7a1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/df254c01a48bd97c7118bbfb4ba448d9060cc616d90159961b0451ef3eb84573?apiKey=01d115c955404390bf34c116e3ccb7a1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/df254c01a48bd97c7118bbfb4ba448d9060cc616d90159961b0451ef3eb84573?apiKey=01d115c955404390bf34c116e3ccb7a1&'
                        className='img-7-services'
                      />
                    </div>
                    <div className='column-4-services'>
                      <img
                        loading='lazy'
                        srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/28d42ede2356fb2b9d09cb33d8fb41845c3785b4abbe19f82ad3935922c3548d?apiKey=01d115c955404390bf34c116e3ccb7a1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/28d42ede2356fb2b9d09cb33d8fb41845c3785b4abbe19f82ad3935922c3548d?apiKey=01d115c955404390bf34c116e3ccb7a1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/28d42ede2356fb2b9d09cb33d8fb41845c3785b4abbe19f82ad3935922c3548d?apiKey=01d115c955404390bf34c116e3ccb7a1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/28d42ede2356fb2b9d09cb33d8fb41845c3785b4abbe19f82ad3935922c3548d?apiKey=01d115c955404390bf34c116e3ccb7a1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/28d42ede2356fb2b9d09cb33d8fb41845c3785b4abbe19f82ad3935922c3548d?apiKey=01d115c955404390bf34c116e3ccb7a1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/28d42ede2356fb2b9d09cb33d8fb41845c3785b4abbe19f82ad3935922c3548d?apiKey=01d115c955404390bf34c116e3ccb7a1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/28d42ede2356fb2b9d09cb33d8fb41845c3785b4abbe19f82ad3935922c3548d?apiKey=01d115c955404390bf34c116e3ccb7a1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/28d42ede2356fb2b9d09cb33d8fb41845c3785b4abbe19f82ad3935922c3548d?apiKey=01d115c955404390bf34c116e3ccb7a1&'
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
              onClick={() => (window.location.href = '/contacto')}
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
                srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/21d4b627f7930f9471f41049d2a271fa1a2b673eb8dbd0768c819d4d49ea55e6?apiKey=01d115c955404390bf34c116e3ccb7a1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/21d4b627f7930f9471f41049d2a271fa1a2b673eb8dbd0768c819d4d49ea55e6?apiKey=01d115c955404390bf34c116e3ccb7a1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/21d4b627f7930f9471f41049d2a271fa1a2b673eb8dbd0768c819d4d49ea55e6?apiKey=01d115c955404390bf34c116e3ccb7a1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/21d4b627f7930f9471f41049d2a271fa1a2b673eb8dbd0768c819d4d49ea55e6?apiKey=01d115c955404390bf34c116e3ccb7a1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/21d4b627f7930f9471f41049d2a271fa1a2b673eb8dbd0768c819d4d49ea55e6?apiKey=01d115c955404390bf34c116e3ccb7a1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/21d4b627f7930f9471f41049d2a271fa1a2b673eb8dbd0768c819d4d49ea55e6?apiKey=01d115c955404390bf34c116e3ccb7a1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/21d4b627f7930f9471f41049d2a271fa1a2b673eb8dbd0768c819d4d49ea55e6?apiKey=01d115c955404390bf34c116e3ccb7a1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/21d4b627f7930f9471f41049d2a271fa1a2b673eb8dbd0768c819d4d49ea55e6?apiKey=01d115c955404390bf34c116e3ccb7a1&'
                className='img-testimonials'
              />
            </div>
            <div className='column-3-testimonials'>
              <img
                loading='lazy'
                srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/77f09bbd65db82bce3439d6ef881fe1f30e83038410ef364de4af9a853c0ef9c?apiKey=01d115c955404390bf34c116e3ccb7a1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/77f09bbd65db82bce3439d6ef881fe1f30e83038410ef364de4af9a853c0ef9c?apiKey=01d115c955404390bf34c116e3ccb7a1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/77f09bbd65db82bce3439d6ef881fe1f30e83038410ef364de4af9a853c0ef9c?apiKey=01d115c955404390bf34c116e3ccb7a1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/77f09bbd65db82bce3439d6ef881fe1f30e83038410ef364de4af9a853c0ef9c?apiKey=01d115c955404390bf34c116e3ccb7a1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/77f09bbd65db82bce3439d6ef881fe1f30e83038410ef364de4af9a853c0ef9c?apiKey=01d115c955404390bf34c116e3ccb7a1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/77f09bbd65db82bce3439d6ef881fe1f30e83038410ef364de4af9a853c0ef9c?apiKey=01d115c955404390bf34c116e3ccb7a1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/77f09bbd65db82bce3439d6ef881fe1f30e83038410ef364de4af9a853c0ef9c?apiKey=01d115c955404390bf34c116e3ccb7a1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/77f09bbd65db82bce3439d6ef881fe1f30e83038410ef364de4af9a853c0ef9c?apiKey=01d115c955404390bf34c116e3ccb7a1&'
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
                onClick={() => (window.location.href = '/contacto')}
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
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/eb370440f459bd92d09e74713e2265032a55d89a090ee8e31c29349352e59158?apiKey=01d115c955404390bf34c116e3ccb7a1&'
              className='img-footer'
            />{' '}
            <div className='div-10-footer'>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/738491bb68b7ad7b8c7415a8e3cedfe5add3802fbf2ec79569a295c9d3d80ea4?apiKey=01d115c955404390bf34c116e3ccb7a1&'
                className='img-2-footer'
              />{' '}
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/5b42af1dd79566102a250f6aa6a55b12f4d0f2160a2b9b3e7e2b017d55217ca9?apiKey=01d115c955404390bf34c116e3ccb7a1&'
                className='img-3-footer'
              />{' '}
            </div>
            <div className='whats-app-image-container'>
              <div className='div-11-footer'>
                Select* US Solutions Copyright
              </div>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/904ebcdadbe94f8f1cc8952eba29d8ec9a917d7047868a745c6f76eeb8dffaf4?apiKey=01d115c955404390bf34c116e3ccb7a1&'
                className='img-4-footer'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
