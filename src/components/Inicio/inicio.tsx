import { ReactElement } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useI18nContext } from "../../i18n/i18n-react";

import "./styles.scss";
import { Header } from "../Header";
import { Card } from "../Card";
import { Footer } from "../Footer";

const Inicio = (): ReactElement => {
  const { LL } = useI18nContext();

  return (
    <div className="home-container">
      <Header activeOption="inicio"></Header>
      <div className="top-image">
        <div className="top-inner-content">
          <div>
            <h1>{LL.topBanner.title()}</h1>
            <span className="top-slogan">{LL.topBanner.slogan()}</span>
            <button className="button secondary">
              {LL.topBanner.button()}
            </button>
          </div>
        </div>
        <div className="top-inner-content">
          <img src="/static/images/placeholderInicio.png"></img>
        </div>
      </div>
      <div className="home-body">
        <div className="row">
          <h1>{LL.inicio.nuestrosServicios()}</h1>
        </div>
        <div className="cards">
          <Card
            title={LL.inicio.staffAugmentation.title()}
            icon="/static/images/placeholderaugmentation.png"
            bodyText={LL.inicio.staffAugmentation.bodyText()}
          ></Card>
          <Card
            title={LL.inicio.dllo.title()}
            icon="/static/images/placeholderaugmentation.png"
            bodyText={LL.inicio.dllo.bodyText()}
          ></Card>
          <div className="card-empty"></div>
        </div>
        <div className="cards">
          <div className="card-empty"></div>
          <Card
            title={LL.inicio.softwareNomina.title()}
            icon="/static/images/placeholderaugmentation.png"
            bodyText={LL.inicio.softwareNomina.bodyText()}
          ></Card>
          <Card
            title={LL.inicio.juridico.title()}
            icon="/static/images/placeholderaugmentation.png"
            bodyText={LL.inicio.juridico.bodyText()}
          ></Card>
        </div>
      </div>
      <div className="about-us-container">
        <div className="about-us-item">
          <img src="/static/images/placeholderaboutus.png"></img>
        </div>
        <div className="about-us-item">
          <h1>{LL.inicio.sobreNosotros.title()}</h1>
          <p>{LL.inicio.sobreNosotros.text()}</p>
        </div>
      </div>
      <div className="home-body hide-mobile">
        <div className="row">
          <h1>{LL.inicio.loqueDicenNuestrosClientes()}</h1>
        </div>
        <Carousel slide={false} indicators={false}>
          <Carousel.Item>
            <div className="carousel-container">
              <Card
                title={LL.inicio.staffAugmentation.title()}
                icon=""
                bodyText={LL.inicio.staffAugmentation.bodyText()}
              ></Card>
              <Card
                title={LL.inicio.staffAugmentation.title()}
                icon=""
                bodyText={LL.inicio.staffAugmentation.bodyText()}
              ></Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-container">
              <Card
                title={LL.inicio.staffAugmentation.title()}
                icon=""
                bodyText={LL.inicio.staffAugmentation.bodyText()}
              ></Card>
              <Card
                title={LL.inicio.staffAugmentation.title()}
                icon=""
                bodyText={LL.inicio.staffAugmentation.bodyText()}
              ></Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-container">
              <Card
                title="Algo que poner aquí"
                icon=""
                bodyText="Algo que poner aquí"
              ></Card>
              <Card
                title={LL.inicio.staffAugmentation.title()}
                icon=""
                bodyText={LL.inicio.staffAugmentation.bodyText()}
              ></Card>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="our-clients-container ">
        <div className="our-client-item num1">
          <div className="our-client-header">
            <div className="client-title-line"></div>
            <span>{LL.inicio.nuestrosClientes()}</span>
          </div>

          <p className="our-client-text">{LL.inicio.nuestrosClientesText()}</p>
        </div>
        <div className="our-client-item num2">
          <div className="client-container">
            <div className="client-image-container">
              <img src="/static/images/clients/bgClient_01.png"></img>
            </div>
            <div className="client-image-container diff">
              <img src="/static/images/clients/bgClient_03.png"></img>
            </div>
            <div className="client-image-container">
              <img src="/static/images/clients/bgClient_06.png"></img>
            </div>
          </div>
          <div className="client-container pad">
            <div className="client-image-container">
              <img src="/static/images/clients/bgClient_05.png"></img>
            </div>
            <div className="client-image-container">
              <img src="/static/images/clients/bgClient_08.png"></img>
            </div>
          </div>
          <div className="client-container">
            <div className="client-image-container">
              <img src="/static/images/clients/bgClient_02.png"></img>
            </div>
            <div className="client-image-container">
              <img src="/static/images/clients/bgClient_04.png"></img>
            </div>
            <div className="client-image-container"></div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Inicio;
