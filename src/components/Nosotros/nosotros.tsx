import { ReactElement } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useI18nContext } from "../../i18n/i18n-react";
import "./styles.scss";
import { Header } from "../Header";
import { Card } from "../Card";
import { Footer } from "../Footer";

const Nosotros = (): ReactElement => {
  const { LL, locale, setLocale } = useI18nContext();

  return (
    <div className="home-container">
      <Header activeOption="nosotros"></Header>
      <div className="top-image">
        <div className="top-inner-content">
          <div>
            <h1>{LL.nosotros.nosotrosTitle()}</h1>
          </div>
        </div>
        <div className="top-inner-content">
          <img src="/static/images/nosotrosPlaceholder.png"></img>
        </div>
      </div>
      <div className="home-body">
        <div className="row nosotros-header">
          <div className="nosotros-header-item">
            <h1>{LL.nosotros.nosotrosHeaderTitle()}</h1>
          </div>
          <div className="nosotros-header-item">
            <p>{LL.nosotros.nosotrosHeaderText()}</p>
          </div>
        </div>
        <div className="nosotros-images">
          <div className="nosotros-image-item">
            <div>
              <img src="/static/images/img1nosotros.png" />
            </div>
          </div>
          <div className="nosotros-image-item">
            <div>
              <img src="/static/images/img2nosotros.png" />
            </div>

            <div className="left-image-container">
              <img src="/static/images/img3nosotros.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="about-us-container">
        <div className="nosotros-item">
          <img src="/static/images/img4nosotros.png"></img>
        </div>
        <div className="nosotros-item">
          <h1>{LL.nosotros.porqueElegirnosTitle()}</h1>
          <div className="elegirnos-options">
            <div className="option">
              <div className="icon">
                <img src="/static/images/icons/entregasExitosasIcon.png"></img>
              </div>
              <div className="text">
                <div className="title">
                  {LL.nosotros.porqueElegirnosText.entregasExitosasCortoPlazoTitle()}
                </div>
                <div className="description">
                  {LL.nosotros.porqueElegirnosText.entregasExitosasCortoPlazoText()}
                </div>
              </div>
            </div>
            <div className="option">
              <div className="icon">
                <img src="/static/images/icons/equiposAutoGestionadoIcon.png"></img>
              </div>
              <div className="text">
                <div className="title">
                  {LL.nosotros.porqueElegirnosText.equiposAutoGestionandosTitle()}
                </div>
                <div className="description">
                  {LL.nosotros.porqueElegirnosText.equiposAutoGestionandosText()}
                </div>
              </div>
            </div>
            <div className="option">
              <div className="icon">
                <img src="/static/images/icons/nuestrosEquiposDeTrabajoIcon.png"></img>
              </div>
              <div className="text">
                <div className="title">
                  {LL.nosotros.porqueElegirnosText.nuestrosEquiposDeTrabajoTitle()}
                </div>
                <div className="description">
                  {LL.nosotros.porqueElegirnosText.nuestrosEquiposDeTrabajoText()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us-container white">
        <div className="nosotros-item">
          <h1>{LL.nosotros.porqueElegirnosTitle()}</h1>
          <div className="elegirnos-options">
            <div className="option">
              <div className="icon">
                <img src="/static/images/icons/flexibilidadIcon.png"></img>
              </div>
              <div className="text">
                <div className="title">
                  {LL.nosotros.porqueElegirnosText.flexibilidadTitle()}
                </div>
                <div className="description">
                  {LL.nosotros.porqueElegirnosText.flexibilidadText()}
                </div>
              </div>
            </div>
            <div className="option">
              <div className="icon">
                <img src="/static/images/icons/calidadServicioIcon.png"></img>
              </div>
              <div className="text">
                <div className="title">
                  {LL.nosotros.porqueElegirnosText.calidadServicioTitle()}
                </div>
                <div className="description">
                  {LL.nosotros.porqueElegirnosText.calidadServicioText()}
                </div>
              </div>
            </div>
            <div className="option">
              <div className="icon">
                <img src="/static/images/icons/comunicacionIcon.png"></img>
              </div>
              <div className="text">
                <div className="title">
                  {LL.nosotros.porqueElegirnosText.comunicacionTitle()}
                </div>
                <div className="description">
                  {LL.nosotros.porqueElegirnosText.comunicacionText()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nosotros-item right">
          <img src="/static/images/img5nosotros.png"></img>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Nosotros;
