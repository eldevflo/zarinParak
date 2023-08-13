import { useTranslation } from "react-i18next";

function About() {
  const { i18n, t } = useTranslation();

  return (
    <div className="about page-content">
      <div className="container">
        <div className="about__section">
          <h1 className="about__section__title">{t("titles.about")}</h1>
          <div
            className="about__section__text"
            style={{
              direction: i18n.language === "fa" ? "rtl" : "ltr",
            }}
          >
            {t("info.description")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
