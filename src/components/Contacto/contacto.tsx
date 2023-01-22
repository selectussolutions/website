import { ReactElement } from "react";
import { useI18nContext } from "../../i18n/i18n-react";
import "./styles.scss";
import { Header } from "../Header";
import { Footer } from "../Footer";

const Contacto = (): ReactElement => {
  const { LL } = useI18nContext();

  const handleSubmit = (): void => {};

  return (
    <div className="home-container">
      <Header activeOption=""></Header>
      <div className="top-image">
        <div className="top-inner-content">
          <div>
            <h1>{LL.contacto.headerTitle()}</h1>
          </div>
        </div>
        <div className="top-inner-content">
          <img src="/static/images/imgContacto.png"></img>
        </div>
      </div>

      <div className="about-us-container contacto map">
        <div className="about-us-item">
          <h1>{LL.contacto.hablemosTitle()}</h1>
          <p>{LL.contacto.hablemosDescripcion()}</p>
          <div className="row img">
            <img src="/static/images/imgContact2.png"></img>
          </div>
        </div>
        <div className="about-us-item">
          <form onSubmit={handleSubmit} className="form-contact">
            <div className="row">
              <label htmlFor="name">{LL.contacto.nombre()}</label>
              <input type="text" className="form-control" name="name" />
            </div>
            <div className="row">
              <label htmlFor="email">{LL.contacto.email()}</label>
              <input type="text" className="form-control" name="email" />
            </div>
            <div className="row">
              <label htmlFor="email">{LL.contacto.mensaje()}</label>
              <textarea className="form-control text-area" name="message" />
            </div>
            <div className="form-footer">
              <div className="checkbox-container">
                <input type="checkbox" />
                <span className="checkbox-text">
                  {LL.contacto.aceptarTyC()}
                </span>
              </div>

              <input type="submit" value={LL.contacto.enviar()} />
            </div>
          </form>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Contacto;
