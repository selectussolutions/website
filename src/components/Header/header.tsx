import { ChangeEventHandler, ReactElement, useState } from "react";
import { useI18nContext } from "../../i18n/i18n-react";
import { locales } from "../../i18n/i18n-util";
import { Locales } from "../../i18n/i18n-types";
import { loadLocaleAsync } from "../../i18n/i18n-util.async";
import "./styles.scss";

type HeaderProps = {
  activeOption: string;
};

const Header = ({ activeOption }: HeaderProps): ReactElement => {
  const { LL, locale, setLocale } = useI18nContext();

  const [active, setActive] = useState(activeOption);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onLocaleSelected: ChangeEventHandler<HTMLSelectElement> = async ({
    target,
  }) => {
    const locale = target.value as Locales;
    localStorage.setItem("lang", locale);
    await loadLocaleAsync(locale);
    setLocale(locale);
  };

  const navigateToContact = (): void => {
    window.location.href = "/contacto";
  };

  return (
    <div className="header-container">
      <img
        src="/static/images/headerlogo.png"
        alt="header-logo"
        className="header-logo"
      ></img>

      <div className="topnav">
        <a
          className={active === "inicio" ? "active" : ""}
          href="/"
          onClick={() => setActive("inicio")}
        >
          {LL.header.inicio()}
        </a>
        <a
          className={active === "nosotros" ? "active" : ""}
          href="/nosotros"
          onClick={() => setActive("nosotros")}
        >
          {LL.header.nosotros()}
        </a>
        <a
          href="/servicios"
          className={active === "servicios" ? "active" : ""}
          onClick={() => setActive("servicios")}
        >
          {LL.header.servicios()}
        </a>
        <a
          href="/productos"
          className={active === "productos" ? "active" : ""}
          onClick={() => setActive("productos")}
        >
          {LL.header.productos()}
        </a>
      </div>
      <div className="button-container">
        <button
          className="button primary-outlined contact"
          onClick={() => navigateToContact()}
        >
          {LL.header.contactoButton()}
        </button>

        <select
          value={locale || ""}
          onChange={onLocaleSelected}
          className="select-locale"
        >
          <option value="" disabled>
            {/* {LL.CHOOSE_LOCALE()} */}
          </option>
          {locales.map(locale => (
            <option key={locale} value={locale}>
              {locale.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <nav className="navbar">
        <div className="navbar-container container">
          <input
            type="checkbox"
            name=""
            id=""
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
        </div>
      </nav>
      <ul className={isMobileMenuOpen ? "menu-items" : " menu-items close"}>
        <li>
          <a
            className={active === "inicio" ? "active" : ""}
            href="/"
            onClick={() => setActive("inicio")}
          >
            {LL.header.inicio()}
          </a>
        </li>
        <li>
          <a
            className={active === "nosotros" ? "active" : ""}
            href="/nosotros"
            onClick={() => setActive("nosotros")}
          >
            {LL.header.nosotros()}
          </a>
        </li>
        <li>
          <a
            href="/servicios"
            className={active === "servicios" ? "active" : ""}
            onClick={() => setActive("servicios")}
          >
            {LL.header.servicios()}
          </a>
        </li>
        <li>
          <a
            href="/productos"
            className={active === "productos" ? "active" : ""}
            onClick={() => setActive("productos")}
          >
            {LL.header.productos()}
          </a>
        </li>
        <li>
          <div className="button-container">
            <button
              className="button primary-outlined contact"
              onClick={() => navigateToContact()}
            >
              {LL.header.contactoButton()}
            </button>

            <select
              value={locale || ""}
              onChange={onLocaleSelected}
              className="select-locale"
            >
              <option value="" disabled>
                {/* {LL.CHOOSE_LOCALE()} */}
              </option>
              {locales.map(locale => (
                <option key={locale} value={locale}>
                  {locale.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Header;
