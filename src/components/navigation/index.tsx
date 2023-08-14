import Phone from "../UI/icons/Phone";
import Logo from "../UI/icons/Logo";
import iranFlag from "../../assets/images/iran.png";
import engFlag from "../../assets/images/eng-flag.png";
import logo from "../../assets/images/logo.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const locales = {
  en: { title: "English" },
  fa: { title: "Farsi" },
};
function Navigation() {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="nav container">
        <div className="nav__actions">
          <div className="nav__phone">
            <Phone />
          </div>
          <div className="nav__language">
            <button
              onClick={() => {
                i18n.changeLanguage(i18n.language == "fa" ? "en" : "fa");
                localStorage.setItem("lang", i18n.language);
              }}
            >
              {i18n.language == "fa" ? (
                <img src={iranFlag} alt="" />
              ) : (
                <img src={engFlag} alt="" width={15} height={12} />
              )}
            </button>
          </div>
        </div>
        <ul className="nav__links">
          <li className="nav__link">
            <a href="/"> {t("nav.home")}</a>
          </li>
          <li className="nav__link">
            <a href="/about"> {t("nav.about")}</a>
          </li>
          <li className="nav__link">
            <a href="/products">{t("nav.products")}</a>
          </li>
          <li className="nav__link">
            <a href="/articles">{t("nav.articles")}</a>
          </li>
          <li className="nav__link">
            <a href="/contact-us">{t("nav.contact")}</a>
          </li>
        </ul>
        <div className="nav__logo">
          <a href="/">
            <Logo />
          </a>
        </div>
      </nav>
      <nav className="mobile-nav">
        <div className="mobile-nav__actions">
          <div className="mobile-nav__phone">
            <Phone />
          </div>
          <div className="mobile-nav__language">
            <button
              onClick={() => {
                i18n.changeLanguage(i18n.language == "fa" ? "en" : "fa");
                localStorage.setItem("lang", i18n.language);
              }}
            >
              {i18n.language == "fa" ? (
                <img src={iranFlag} alt="" />
              ) : (
                <img src={engFlag} alt="" width={15} height={12} />
              )}
            </button>
          </div>
        </div>

        <div className="mobile-nav__logo">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="mobile-nav__toggler" onClick={() => setOpen(!open)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.54 8.81001C19.1747 8.81001 20.5 7.48478 20.5 5.85001C20.5 4.21525 19.1747 2.89001 17.54 2.89001C15.9052 2.89001 14.58 4.21525 14.58 5.85001C14.58 7.48478 15.9052 8.81001 17.54 8.81001Z"
              fill="#292D32"
            />
            <path
              d="M6.46 8.81001C8.09476 8.81001 9.42 7.48478 9.42 5.85001C9.42 4.21525 8.09476 2.89001 6.46 2.89001C4.82524 2.89001 3.5 4.21525 3.5 5.85001C3.5 7.48478 4.82524 8.81001 6.46 8.81001Z"
              fill="#292D32"
            />
            <path
              d="M17.54 21.11C19.1747 21.11 20.5 19.7848 20.5 18.15C20.5 16.5152 19.1747 15.19 17.54 15.19C15.9052 15.19 14.58 16.5152 14.58 18.15C14.58 19.7848 15.9052 21.11 17.54 21.11Z"
              fill="#292D32"
            />
            <path
              d="M6.46 21.11C8.09476 21.11 9.42 19.7848 9.42 18.15C9.42 16.5152 8.09476 15.19 6.46 15.19C4.82524 15.19 3.5 16.5152 3.5 18.15C3.5 19.7848 4.82524 21.11 6.46 21.11Z"
              fill="#292D32"
            />
          </svg>
        </div>
        <div className={`mobile-nav__menu ${open && "mobile-nav__menu--open"}`}>
          <div className="mobile-nav__menu__head">
            <div
              className="mobile-nav__menu__close"
              onClick={() => setOpen(false)}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 5.58574L11.95 0.635742L13.364 2.04974L8.414 6.99974L13.364 11.9497L11.95 13.3637L7 8.41374L2.05 13.3637L0.636002 11.9497L5.586 6.99974L0.636002 2.04974L2.05 0.635742L7 5.58574Z"
                  fill="#101113"
                />
              </svg>
            </div>
            <div className="mobile-nav__logo">
              <a href="/">
                <img src={logo} alt="" />
              </a>
            </div>
          </div>
          <ul className={`mobile-nav__links`}>
            <li className="mobile-nav__link">
              <a href="/"> {t("nav.home")}</a>
            </li>
            <li className="mobile-nav__link">
              <a href="/about"> {t("nav.about")}</a>
            </li>
            <li className="mobile-nav__link">
              <a href="/products">{t("nav.products")}</a>
            </li>
            <li className="mobile-nav__link">
              <a href="/articles">{t("nav.articles")}</a>
            </li>
            <li className="mobile-nav__link">
              <a href="/contact-us">{t("nav.contact")}</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
