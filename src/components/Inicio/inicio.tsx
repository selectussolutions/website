import { ReactElement } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useI18nContext } from '../../i18n/i18n-react';

import './styles.scss';
import { Header } from '../Header';
import { Card } from '../Card';
import { Footer } from '../Footer';
import ImageGallery from 'react-image-gallery';

const imgWidth = 150;
const imgHeight = 150;




const images = [

  {
    original: '/static/images/clients/ventura group.png',
    thumbnail: '/static/images/clients/ventura group.png',
    originalHeight : imgWidth,
    originalWidth :imgHeight,
  },

  {
    original: '/static/images/clients/avery dennison.png',
    thumbnail: '/static/images/clients/avery dennison.png',
    originalHeight : imgWidth,
    originalWidth :imgHeight,
  },

  {
    original: '/static/images/clients/ofi.png',
    thumbnail: '/static/images/clients/ofi.png',
    originalHeight : imgWidth,
    originalWidth :imgHeight,
  },


  {
    original: '/static/images/clients/CARBOMAX.png',
    thumbnail: '/static/images/clients/CARBOMAX.png',
    originalHeight : imgWidth,
    originalWidth :imgHeight,
  },

  {
    original: '/static/images/clients/centro mayor.png',
    thumbnail: '/static/images/clients/centro mayor.png',
    originalHeight : imgWidth,
    originalWidth :imgHeight,
  },

  {
    original: '/static/images/clients/damasa.png',
    thumbnail: '/static/images/clients/damasa.png',
    originalHeight : 100,
    originalWidth :imgHeight,
  },


  {
    original: '/static/images/clients/todaco.png',
    thumbnail: '/static/images/clients/todaco.png',
    originalHeight : 100,
    originalWidth :100,
  },
  {
    original: '/static/images/clients/turk house.png',
    thumbnail: '/static/images/clients/turk house.png',
    originalHeight : 100,
    originalWidth :100,
  },

  {
    original: '/static/images/clients/Calima.png',
    thumbnail: '/static/images/clients/Calima.png',
    originalHeight : 100,
    originalWidth :100,
  },
  {
    original: '/static/images/clients/aliklean.png',
    thumbnail: '/static/images/clients/aliklean.png',
    originalHeight : imgWidth,
    originalWidth :imgHeight,
  },
  {
    original: '/static/images/clients/carnes santacruz.png',
    thumbnail: '/static/images/clients/carnes santacruz.png',
    originalHeight : imgWidth,
    originalWidth :imgHeight,
  },
  {
    original: '/static/images/clients/carnes y carnes.png',
    thumbnail: '/static/images/clients/carnes y carnes.png',
    originalHeight : 100,
    originalWidth :100,
  },

  {
    original: '/static/images/clients/clinica santa ana.png',
    thumbnail: '/static/images/clients/clinica santa ana.png',
    originalHeight : 70,
    originalWidth : imgHeight,
  },
  {
    original: '/static/images/clients/cobb.png',
    thumbnail: '/static/images/clients/cobb.png',
    originalHeight : imgWidth,
    originalWidth :imgHeight,
  },
  {
    original: '/static/images/clients/concremack.png',
    thumbnail: '/static/images/clients/concremack.png',
    originalHeight : imgWidth,
    originalWidth :imgHeight,
  },
  {
    original: '/static/images/clients/crazy town.png',
    thumbnail: '/static/images/clients/crazy town.png',
    originalHeight : imgWidth,
    originalWidth :imgHeight,
  },

  {
    original: '/static/images/clients/dsierra.png',
    thumbnail: '/static/images/clients/dsierra.png',
    originalHeight : imgWidth,
    originalWidth :imgHeight,
  },
  {
    original: '/static/images/clients/gesvalt.png',
    thumbnail: '/static/images/clients/gesvalt.png',
    originalHeight : 70,
    originalWidth :imgHeight,
  },
  {
    original: '/static/images/clients/italco.png',
    thumbnail: '/static/images/clients/italco.png',
    originalHeight : 100,
    originalWidth :100,
  },
  {
    original: '/static/images/clients/labbrands.png',
    thumbnail: '/static/images/clients/labbrands.png',
    originalHeight : 100,
    originalWidth :100,
  },
  {
    original: '/static/images/clients/logo-econtainers-azul-oscuro.png',
    thumbnail: '/static/images/clients/logo-econtainers-azul-oscuro.png',
    originalHeight : 100,
    originalWidth :100,
  },

  {
    original: '/static/images/clients/panaderia-barichara.png',
    thumbnail: '/static/images/clients/panaderia-barichara.png',
    originalHeight : imgWidth,
    originalWidth :imgHeight,
  },
  {
    original: '/static/images/clients/secap.png',
    thumbnail: '/static/images/clients/secap.png',
    originalHeight : imgWidth,
    originalWidth :imgHeight,
  },
  {
    original: '/static/images/clients/sudamin.png',
    thumbnail: '/static/images/clients/sudamin.png',
    originalHeight : 100,
    originalWidth :100,
  },




  
];


const Inicio = (): ReactElement => {
  const { LL } = useI18nContext();

  return (
    <div className='home-container'>
      <Header activeOption='inicio'></Header>
      <div className='top-image inicio'>
        <div className='top-inner-content'>
          <div>
            <h1>{LL.topBanner.title()}</h1>
            <span className='top-slogan'>{LL.topBanner.slogan()}</span>
            <div>
              <a href='/nosotros'>
                <button className='button secondary'>
                  {LL.topBanner.button()}
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className='top-inner-content'>
          <img src='/static/images/placeholderInicio.png'></img>
        </div>
      </div>
      <div className='home-body'>
        <div className='row'>
          <h1>{LL.inicio.nuestrosServicios()}</h1>
        </div>
        <div className='cards'>
          <Card
            title={LL.inicio.staffAugmentation.title()}
            icon='/static/images/icons/staff.png'
            bodyText={LL.inicio.staffAugmentation.bodyText()}
          ></Card>
          <Card
            title={LL.inicio.dllo.title()}
            icon='/static/images/icons/dllo.png'
            bodyText={LL.inicio.dllo.bodyText()}
          ></Card>

          <Card
            title={LL.inicio.softwareNomina.title()}
            icon='/static/images/icons/pre.png'
            bodyText={LL.inicio.softwareNomina.bodyText()}
          ></Card>
          <Card
            title={LL.inicio.juridico.title()}
            icon='/static/images/icons/aseso.png'
            bodyText={LL.inicio.juridico.bodyText()}
          ></Card>
        </div>
      </div>
      <div className='about-us-container'>
        <div className='about-us-item'>
          <img src='/static/images/placeholderaboutus.png'></img>
        </div>
        <div className='about-us-item'>
          <h1>{LL.inicio.sobreNosotros.title()}</h1>
          <p>{LL.inicio.sobreNosotros.text()}</p>
        </div>
      </div>
      {/*       <div className='home-body hide-mobile'>
        <div className='row'>
          <h1>{LL.inicio.loqueDicenNuestrosClientes()}</h1>
        </div>
        <Carousel slide={false} indicators={false}>
          <Carousel.Item>
            <div className='carousel-container'>
              <Card
                title={LL.inicio.staffAugmentation.title()}
                icon=''
                bodyText={LL.inicio.staffAugmentation.bodyText()}
              ></Card>
              <Card
                title={LL.inicio.staffAugmentation.title()}
                icon=''
                bodyText={LL.inicio.staffAugmentation.bodyText()}
              ></Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='carousel-container'>
              <Card
                title={LL.inicio.staffAugmentation.title()}
                icon=''
                bodyText={LL.inicio.staffAugmentation.bodyText()}
              ></Card>
              <Card
                title={LL.inicio.staffAugmentation.title()}
                icon=''
                bodyText={LL.inicio.staffAugmentation.bodyText()}
              ></Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='carousel-container'>
              <Card
                title='Algo que poner aquí'
                icon=''
                bodyText='Algo que poner aquí'
              ></Card>
              <Card
                title={LL.inicio.staffAugmentation.title()}
                icon=''
                bodyText={LL.inicio.staffAugmentation.bodyText()}
              ></Card>
            </div>
          </Carousel.Item>
        </Carousel>
      </div> */}

      <div className='our-clients-container '>
        <div className='our-client-item num1'>
          <div className='our-client-header'>
            <div className='client-title-line'></div>
            <span>{LL.inicio.nuestrosClientes()}</span>
          </div>

          <p className='our-client-text'>{LL.inicio.nuestrosClientesText()}</p>
        </div>
        <div className='our-client-item num2 px-2 mt-4 mt-md-0'>

        <ImageGallery 
        items={images} 
        autoPlay={true} 
        showFullscreenButton={false}
         />

        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Inicio;
