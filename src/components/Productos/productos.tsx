import { ReactElement } from 'react';
import { useI18nContext } from '../../i18n/i18n-react';
import './styles.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    'id': `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Productos = (): ReactElement => {
  const { LL, locale, setLocale } = useI18nContext();

  const renderTooltip = (props: any, text: string) => (
    <Tooltip id='button-tooltip' {...props}>
      {text}
    </Tooltip>
  );

  function truncateSelectUs(text: string): import('react').ReactNode {
    return text.length > 100 ? text.substring(0, 100) + '...' : text;
  }

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();

    window.open(
      'https://wa.me/573138138754?text=Hola,%20Select%20Us!%20',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className='home-container'>
      <Header activeOption='productos'></Header>

      <div className='top-image'>
        <div className='top-inner-content'>
          <div>
            <h1>{LL.productos.headerTitle()}</h1>
          </div>
        </div>
        <div className='top-inner-content'>
          <img src='/static/images/imgContacto.png'></img>
        </div>
      </div>

      <div className='home-body destacados'>
        <div className='row nosotros-header '>
          <div className='nosotros-header-item'>
            <h1>{LL.productos.destacadosTitle()}</h1>
          </div>
          <div className='nosotros-header-item mt-4 mt-md-0'>
            <p>{LL.productos.destacadosDescripcion()}</p>
          </div>
        </div>
      </div>

      <div className='p-2 p-md-5'>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{
                style: { background: '#502c85', height: 3, color: '#502c85' },
              }}
              aria-label='products'
            >
              <Tab label={LL.productos.populares()} {...a11yProps(0)} />
              <Tab label={LL.productos.dispositivos()} {...a11yProps(1)} />
              <Tab label={LL.productos.licencias()} {...a11yProps(2)} />
              <Tab label={LL.productos.capaciaciones()} {...a11yProps(3)} />
              <Tab label={LL.productos.desarrollo()} {...a11yProps(4)} />
              <Tab label={LL.productos.juridica()} {...a11yProps(5)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            {/* Populares */}

            <div className='row py-4'>
              <div className='col-md-6'>
                <div className='card c-custom h-100'>
                  <div className='d-flex align-items-center justify-content-center'>
                    <img
                      src='/static/images/products/M4.png'
                      className='card-img-top'
                      alt='...'
                    ></img>
                  </div>

                  <div className='card-body'>
                    <h5 className='card-title'>{LL.productos.m4Title()}</h5>
                    <OverlayTrigger
                      placement='bottom'
                      overlay={renderTooltip(
                        null,
                        LL.productos.m4Description()
                      )}
                    >
                      <p className='card-text'>
                        {truncateSelectUs(LL.productos.m4Description())}
                      </p>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='row'>
                  <div className='d-flex flex-column'>
                    <div className='card c-custom mb-4 mt-4 mt-md-0'>
                      <div className='d-flex align-items-center justify-content-center'>
                        <div className='p-3 py-4'>
                          <img
                            src='/static/images/products/biotime.png'
                            className='card-img-top-big'
                            alt='...'
                          ></img>
                        </div>
                      </div>
                      <div className='card-body'>
                        <h5 className='card-title'>
                          {LL.productos.biotimeTitle()}
                        </h5>
                        <OverlayTrigger
                          placement='bottom'
                          overlay={renderTooltip(
                            null,
                            LL.productos.biotimeDescription()
                          )}
                        >
                          <p className='card-text'>
                            {truncateSelectUs(
                              LL.productos.biotimeDescription()
                            )}
                          </p>
                        </OverlayTrigger>
                      </div>
                    </div>

                    <div className='card c-custom border-0 h-100 p-2'>
                      <div className='card-body'>
                        <h5 className='card-title'>
                          {LL.productos.operativaTitle()}
                        </h5>
                        <OverlayTrigger
                          placement='bottom'
                          overlay={renderTooltip(
                            null,
                            LL.productos.operativaDescription()
                          )}
                        >
                          <p className='card-text'>
                            {LL.productos.operativaDescription()}
                          </p>
                        </OverlayTrigger>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className='py-4'>{LL.productos.otrosProductos()}</h2>

            <div className='row row-cols-1 row-cols-md-3 g-4 py-4'>
              <div className='col'>
                <div className='card c-custom border-0 h-100'>
                  <div className='d-flex align-items-center justify-content-center'>
                    <img
                      src='/static/images/products/MB10VL.png'
                      className='card-img-top'
                      alt='...'
                    ></img>
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title '>
                      {LL.productos.mb10vlTitle()}
                    </h5>

                    <OverlayTrigger
                      placement='bottom'
                      overlay={renderTooltip(
                        null,
                        LL.productos.mb10vlDescription()
                      )}
                    >
                      <p className='card-text bodyText'>
                        {truncateSelectUs(LL.productos.mb10vlDescription())}
                      </p>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='card c-custom border-0 h-100'>
                  <div className='d-flex align-items-center justify-content-center'>
                    <img
                      src='/static/images/products/stuff.jpg'
                      className='card-img-top'
                      alt='...'
                    ></img>
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title'>{LL.productos.stuffTitle()}</h5>

                    <OverlayTrigger
                      placement='bottom'
                      overlay={renderTooltip(
                        null,
                        LL.productos.stuffDescription()
                      )}
                    >
                      <p className='card-text'>
                        {truncateSelectUs(LL.productos.stuffDescription())}
                      </p>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>

              <div className='col'>
                <div className='card c-custom border-0 h-100'>
                  <div className='d-flex align-items-center justify-content-center'>
                    <img
                      src='/static/images/products/legal.jpg'
                      className='card-img-top'
                      alt='...'
                    ></img>
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title'>{LL.productos.legalTitle()}</h5>

                    <OverlayTrigger
                      placement='bottom'
                      overlay={renderTooltip(
                        null,
                        LL.productos.legalDescription()
                      )}
                    >
                      <p className='card-text'>
                        {truncateSelectUs(LL.productos.legalDescription())}
                      </p>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            {/* Dispositivos */}

            <div className='row row-cols-1 row-cols-md-3 g-4 py-4'>
              <div className='col'>
                <div className='card c-custom border-0 h-100'>
                  <div className='d-flex align-items-center justify-content-center'>
                    <img
                      src='/static/images/products/MB10VL.png'
                      className='card-img-top'
                      alt='...'
                    ></img>
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title'>{LL.productos.mb10vlTitle()}</h5>
                    <OverlayTrigger
                      placement='bottom'
                      overlay={renderTooltip(
                        null,
                        LL.productos.mb10vlDescription()
                      )}
                    >
                      <p className='card-text'>
                        {truncateSelectUs(LL.productos.mb10vlDescription())}
                      </p>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='card c-custom h-100'>
                  <div className='d-flex align-items-center justify-content-center'>
                    <img
                      src='/static/images/products/V4L.png'
                      className='card-img-top-small'
                      alt='...'
                    ></img>
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title'>{LL.productos.v4lTitle()}</h5>
                    <OverlayTrigger
                      placement='bottom'
                      overlay={renderTooltip(
                        null,
                        LL.productos.v4lDescription()
                      )}
                    >
                      <p className='card-text'>
                        {truncateSelectUs(LL.productos.v4lDescription())}
                      </p>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>

              <div className='col'>
                <div className='card c-custom h-100'>
                  <div className='d-flex align-items-center justify-content-center'>
                    <img
                      src='/static/images/products/TL1.png'
                      className='card-img-top-small'
                      alt='...'
                    ></img>
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title'>{LL.productos.tl1Title()}</h5>
                    <OverlayTrigger
                      placement='bottom'
                      overlay={renderTooltip(
                        null,
                        LL.productos.tl1Description()
                      )}
                    >
                      <p className='card-text'>
                        {truncateSelectUs(LL.productos.tl1Description())}
                      </p>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>

              <div className='col'>
                <div className='card c-custom h-100'>
                  <div className='d-flex align-items-center justify-content-center'>
                    <img
                      src='/static/images/products/MB560VL.png'
                      className='card-img-top-small'
                      alt='...'
                    ></img>
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title'>
                      {LL.productos.mb560vlTitle()}
                    </h5>
                    <OverlayTrigger
                      placement='bottom'
                      overlay={renderTooltip(
                        null,
                        LL.productos.mb560vlDescription()
                      )}
                    >
                      <p className='card-text'>
                        {truncateSelectUs(LL.productos.mb560vlDescription())}
                      </p>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>

              <div className='col'>
                <div className='card c-custom h-100'>
                  <div className='d-flex align-items-center justify-content-center py-5'>
                    <img
                      src='/static/images/products/EFACE10.png'
                      className='card-img-top-small'
                      alt='...'
                    ></img>
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title'>
                      {LL.productos.eface10Title()}
                    </h5>
                    <OverlayTrigger
                      placement='bottom'
                      overlay={renderTooltip(
                        null,
                        LL.productos.eface10Description()
                      )}
                    >
                      <p className='card-text'>
                        {truncateSelectUs(LL.productos.eface10Description())}
                      </p>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>

              <div className='col'>
                <div className='card c-custom h-100'>
                  <div className='d-flex align-items-center justify-content-center py-5'>
                    <img
                      src='/static/images/products/M4.png'
                      className='card-img-top-small'
                      alt='...'
                    ></img>
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title'>{LL.productos.m4Title()}</h5>
                    <OverlayTrigger
                      placement='bottom'
                      overlay={renderTooltip(
                        null,
                        LL.productos.m4Description()
                      )}
                    >
                      <p className='card-text'>
                        {truncateSelectUs(LL.productos.m4Description())}
                      </p>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            {/* Licencias */}

            <div className='row row-cols-1 row-cols-md-3 g-4 py-4'>
              <div className='col'>
                <div className='card c-custom border-0 h-100'>
                  <div className='d-flex align-items-center justify-content-center'>
                    <img
                      src='/static/images/products/biotime.png'
                      className='card-img-top py-4'
                      alt='...'
                    ></img>
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title'>
                      {LL.productos.biotimeTitle()}
                    </h5>
                    <OverlayTrigger
                      placement='bottom'
                      overlay={renderTooltip(
                        null,
                        LL.productos.biotimeDescription()
                      )}
                    >
                      <p className='card-text'>
                        {truncateSelectUs(LL.productos.biotimeDescription())}
                      </p>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>

              <div className='col'>
                <div className='card c-custom border-0 h-100'>
                  <div className='d-flex align-items-center justify-content-center'>
                    <img
                      src='/static/images/products/biosecurity.png'
                      className='card-img-top'
                      alt='...'
                    ></img>
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title'>
                      {LL.productos.biosecurityTitle()}
                    </h5>
                    <OverlayTrigger
                      placement='bottom'
                      overlay={renderTooltip(
                        null,
                        LL.productos.biosecurityDescription()
                      )}
                    >
                      <p className='card-text'>
                        {truncateSelectUs(
                          LL.productos.biosecurityDescription()
                        )}
                      </p>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            {/* Capacitaciones */}

            <div className='row row-cols-1 row-cols-md-3 g-4 py-4'>
              <div className='col'>
                <div className='card c-custom border-0 h-100'>
                  <div className='card-body'>
                    <h5 className='card-title'>
                      {LL.productos.operativaTitle()}
                    </h5>
                    <OverlayTrigger
                      placement='bottom'
                      overlay={renderTooltip(
                        null,
                        LL.productos.operativaDescription()
                      )}
                    >
                      <p className='card-text'>
                        {truncateSelectUs(LL.productos.operativaDescription())}
                      </p>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>

              <div className='col'>
                <div className='card c-custom border-0 h-100'>
                  <div className='card-body'>
                    <h5 className='card-title'>
                      {LL.productos.administrativaTitle()}
                    </h5>
                    <OverlayTrigger
                      placement='bottom'
                      overlay={renderTooltip(
                        null,
                        LL.productos.administrativaDescription()
                      )}
                    >
                      <p className='card-text'>
                        {truncateSelectUs(
                          LL.productos.administrativaDescription()
                        )}
                      </p>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>

              <div className='col'>
                <div className='card c-custom border-0 h-100'>
                  <div className='card-body'>
                    <h5 className='card-title'>{LL.productos.configTitle()}</h5>
                    <OverlayTrigger
                      placement='bottom'
                      overlay={renderTooltip(
                        null,
                        LL.productos.configDescription()
                      )}
                    >
                      <p className='card-text'>
                        {truncateSelectUs(LL.productos.configDescription())}
                      </p>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>

              <div className='col'>
                <div className='card c-custom border-0 h-100'>
                  <div className='card-body'>
                    <h5 className='card-title'>
                      {LL.productos.instalacionTitle()}
                    </h5>
                    <OverlayTrigger
                      placement='bottom'
                      overlay={renderTooltip(
                        null,
                        LL.productos.instalacionDescription()
                      )}
                    >
                      <p className='card-text'>
                        {truncateSelectUs(
                          LL.productos.instalacionDescription()
                        )}
                      </p>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>

              <div className='col'>
                <div className='card c-custom border-0 h-100'>
                  <div className='card-body'>
                    <h5 className='card-title'>
                      {LL.productos.acompanamientoTitle()}
                    </h5>
                    <OverlayTrigger
                      placement='bottom'
                      overlay={renderTooltip(
                        null,
                        LL.productos.acompanamientoDescription()
                      )}
                    >
                      <p className='card-text'>
                        {truncateSelectUs(
                          LL.productos.acompanamientoDescription()
                        )}
                      </p>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={4}>
            {/* Desarrollo */}

            <div className='row py-4'>
              <div className='col-md-6'>
                <div className='row'>
                  <div className='d-flex flex-column'>
                    <div className='card c-custom mb-4 mt-4 mt-md-0'>
                      <div className='d-flex align-items-center justify-content-center'>
                        <img
                          src='/static/images/products/software.jpg'
                          className='card-img-top-software'
                          alt='...'
                        ></img>
                      </div>
                      <div className='card-body'>
                        <h5 className='card-title'>
                          {LL.productos.developTitle()}
                        </h5>
                        <OverlayTrigger
                          placement='bottom'
                          overlay={renderTooltip(
                            null,
                            LL.productos.developDescription()
                          )}
                        >
                          <p className='card-text'>
                            {LL.productos.developDescription()}
                          </p>
                        </OverlayTrigger>

                        <ul className='software card-title '>
                          <li>{LL.productos.stuffBaseDatos()}</li>
                          <li>{LL.productos.stuffBack()}</li>
                          <li>{LL.productos.stuffFront()}</li>
                          <li>{LL.productos.stuffMovil()}</li>
                          <li>{LL.productos.stuffDevOps()}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-md-6'>
                <div className='card c-custom h-100'>
                  <div className='d-flex align-items-center justify-content-center'>
                    <img
                      src='/static/images/products/stuff.jpg'
                      className='card-img-top'
                      alt='...'
                    ></img>
                  </div>

                  <div className='card-body py-5'>
                    <h5 className='card-title'>{LL.productos.stuffTitle()}</h5>
                    <OverlayTrigger
                      placement='bottom'
                      overlay={renderTooltip(
                        null,
                        LL.productos.stuffDescription()
                      )}
                    >
                      <p className='card-text'>
                        {LL.productos.stuffDescription()}
                      </p>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={5}>
            {/* Juridica */}

            <div className='row row-cols-1 row-cols-md-2 g-4 py-4'>
              <div className='col'>
                <div className='card c-custom border-0 h-100'>
                  <div className='d-flex align-items-center justify-content-center'>
                    <img
                      src='/static/images/products/legal.jpg'
                      className='card-img-top'
                      alt='...'
                    ></img>
                  </div>
                  <div className='card-body py-4'>
                    <h5 className='card-title '>{LL.productos.legalTitle()}</h5>
                    <OverlayTrigger
                      placement='bottom'
                      overlay={renderTooltip(
                        null,
                        LL.productos.legalDescription()
                      )}
                    >
                      <p className='card-text'>
                        {truncateSelectUs(LL.productos.legalDescription())}
                      </p>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </Box>

        <div className='d-flex align-items-center justify-content-center py-4'>
          <form onSubmit={submitForm}>
            <input type='submit' value={LL.productos.comprar()} />
          </form>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Productos;
