import { ReactElement } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useI18nContext } from "../../i18n/i18n-react";
import "./styles.scss";
import { Header } from "../Header";
import { Card } from "../Card";
import { Footer } from "../Footer";

const Servicios = (): ReactElement => {
  const { LL, locale, setLocale } = useI18nContext();

  return (
    <div className="home-container">
      <Header activeOption="servicios"></Header>
      <div className="top-image">
        <div className="top-inner-content">
          <div>
            <h1>{LL.servicios.title()}</h1>
          </div>
        </div>
        <div className="top-inner-content">
          <img src="/static/images/serviciosPlaceholder.png"></img>
        </div>
      </div>
      <div className="home-body services">
        <div className="servicios-first-container-text">
          <div className="title">
            {LL.servicios.sotfwareEspecializadoTitle()}
          </div>
          <div className="text">{LL.servicios.softwareEspecializadoText()}</div>
        </div>
        <div className="servicios-first-container-cards">
          <div className="card">
            <div className="image">
              <img src="/static/images/bioTime.png"></img>
            </div>
            <div className="text">{LL.servicios.bioTime()}</div>
          </div>
          <div className="card top">
            <div className="image">
              <img src="/static/images/ZKTeco.png"></img>
            </div>
            <div className="text">{LL.servicios.ztkTeco()}</div>
          </div>
          <div className="card">
            <div className="image">
              <img src="/static/images/ZKBioSecurity1.png"></img>
            </div>
            <div className="text">{LL.servicios.bioSecurity()}</div>
          </div>
        </div>
      </div>
      <div className="about-us-container services">
        <div className="about-us-item">
          <h1>{LL.servicios.dlloSofwareAlaMedidaTitle()}</h1>
          <p>{LL.servicios.dlloSofwareAlaMedidaText()}</p>
        </div>
        <div className="about-us-item image">
          <img src="/static/images/dlloDeSoftwareMedida.png"></img>
        </div>
      </div>

      <div className="about-us-container services">
        <div className="about-us-item">
          <img src="/static/images/img5nosotros.png"></img>
        </div>
        <div className="about-us-item">
          <div className="text">
            <h1>{LL.servicios.staffAugmentationTitle()}</h1>
            <p>{LL.servicios.staffAugmentationText()}</p>
          </div>

          <div className="checks">
            <div className="icon">
              <img src="/static/images/icons/checkMarkPink.png"></img>
            </div>
            <div className="text">{LL.servicios.backEnd()}</div>
          </div>
          <div className="checks">
            <div className="icon">
              <img src="/static/images/icons/checkMarkPink.png"></img>
            </div>
            <div className="text">{LL.servicios.frontEnd()}</div>
          </div>
          <div className="checks">
            <div className="icon">
              <img src="/static/images/icons/checkMarkPink.png"></img>
            </div>
            <div className="text">{LL.servicios.dlloMobil()}</div>
          </div>
          <div className="checks">
            <div className="icon">
              <img src="/static/images/icons/checkMarkPink.png"></img>
            </div>
            <div className="text">{LL.servicios.basesDeDatos()}</div>
          </div>
        </div>
      </div>
      <div className="about-us-container services">
        <div className="about-us-item">
          <h1>{LL.servicios.asesoriaJuridicaTitle()}</h1>
          <p>{LL.servicios.asesoriaJuridicaText()}</p>
        </div>
        <div className="about-us-item image">
          <img src="/static/images/img4nosotros.png"></img>
        </div>
      </div>
      <div className="about-us-container control">
        <div className="about-us-item">
          <div className="overlapped-image-1">
            <img src="/static/images/outlineDispositivosControlAcceso.png"></img>
          </div>
          <div className="overlapped-image-2">
            <img src="/static/images/dispositivosControlAcceso.png"></img>
          </div>
        </div>
        <div className="about-us-item">
          <div className="header">
            <div className="header-tex-blue">
              <div className="line"></div>
              <span>{LL.servicios.nuestrosServicios()}</span>
            </div>
            <div className="header-tex">{LL.servicios.dispositivosCA()}</div>
            <div className="dispositivo-card">
              <p> {LL.servicios.dispositivosCard1()}</p>
            </div>
            <div className="dispositivo-card">
              <p>{LL.servicios.dispositivosCard2()}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Servicios;
