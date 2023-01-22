import { ReactElement } from "react";
import { useI18nContext } from "../../i18n/i18n-react";
import "./styles.scss";

const Footer = (): ReactElement => {
  const { LL, locale, setLocale } = useI18nContext();

  return (
    <div className="footer-container">
      <div className="footer-navigation">
        <div className="topnav">
          <a href="/">{LL.header.inicio()}</a>
          <a href="/nosotros">{LL.header.nosotros()}</a>
          <a href="#news">{LL.header.servicios()}</a>
          <a href="#news">{LL.header.productos()}</a>
        </div>
      </div>
      <div className="footer-icons">
        <img src="/static/images/icons/facebook_color.png"></img>
        <img src="/static/images/icons/linkedin_color.png"></img>
        <img src="/static/images/icons/whatsapp_color.png"></img>
      </div>
      <div className="footer-separation"></div>
      <div className="footer-copyright">Select* US Solutions Copyright</div>
    </div>
  );
};

export default Footer;
