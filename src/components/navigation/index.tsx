import Phone from "../UI/icons/Phone";
import Logo from "../UI/icons/Logo";
import iranFlag from "../../assets/images/iran.png";
import engFlag from "../../assets/images/eng-flag.png";
import { useTranslation } from "react-i18next";

export const locales = {
  en: { title: "English" },
  fa: { title: "Farsi" },
};
function Navigation() {
  const { i18n, t } = useTranslation();

  return (
    <nav className="nav container">
      <div className="nav__actions">
        <div className="nav__phone">
          <Phone />
        </div>
        <div className="nav__language">
          <button
            onClick={() =>
              i18n.changeLanguage(i18n.language == "fa" ? "en" : "fa")
            }
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
          <a href="">{t("nav.articles")}</a>
        </li>
        <li className="nav__link">
          <a href="">{t("nav.contact")}</a>
        </li>
      </ul>
      <div className="nav__logo">
        <Logo />
      </div>
    </nav>
  );
}

export default Navigation;
