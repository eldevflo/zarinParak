import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="footer">
      <div
        className="footer__content container"
        style={{
          flexDirection: i18n.language === "fa" ? "row-reverse" : "row",
          textAlign: i18n.language === "fa" ? "right" : "left",
        }}
      >
        <div className="footer__intro">
          <div className="footer__intro__title">
            <h3> {t("info.companyName")}</h3>
          </div>
          <div
            className="footer__intro__text"
            style={{
              direction: i18n.language === "fa" ? "rtl" : "ltr",
            }}
          >
            {t("info.description")}
          </div>
        </div>
        <div className="footer__address">
          <div className="footer__address__title">{t("info.addressTitle")}</div>
          <div className="footer__address__text">
            {t("info.address")}
            <br />
            {t("info.postalCode")}
          </div>
        </div>
        <div className="footer__media">
          <div className="footer__media__title">
            {t("info.contactInfoTitle")}
          </div>
          <div className="footer__media__content">
            <div className="footer__media__phones">
              +989183692302 <br /> +989128662302 <br /> +989189657341 <br />
              +9808644433978
            </div>
            <div className="footer__media__email">
              <a
                href="mailto:majidmakantalab@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                majidmakantalab@gmail.com
              </a>
            </div>
            <ul className="footer__media__socials">
              <li>
                <a
                  href="https://www.instagram.com/plastic_recycling1390"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                      fill="#ECF4FF"
                    />
                    <path
                      d="M12 16.25C9.66 16.25 7.75 14.34 7.75 12C7.75 9.66 9.66 7.75 12 7.75C14.34 7.75 16.25 9.66 16.25 12C16.25 14.34 14.34 16.25 12 16.25ZM12 9.25C10.48 9.25 9.25 10.48 9.25 12C9.25 13.52 10.48 14.75 12 14.75C13.52 14.75 14.75 13.52 14.75 12C14.75 10.48 13.52 9.25 12 9.25Z"
                      fill="#ECF4FF"
                    />
                    <path
                      d="M17 7.4999C16.87 7.4999 16.74 7.4699 16.62 7.4199C16.5 7.3699 16.39 7.2999 16.29 7.2099C16.2 7.1099 16.12 6.9999 16.07 6.8799C16.02 6.7599 16 6.6299 16 6.4999C16 6.3699 16.02 6.2399 16.07 6.1199C16.13 5.9899 16.2 5.8899 16.29 5.7899C16.34 5.7499 16.39 5.6999 16.44 5.6699C16.5 5.6299 16.56 5.5999 16.62 5.5799C16.68 5.5499 16.74 5.5299 16.81 5.5199C17.13 5.4499 17.47 5.5599 17.71 5.7899C17.8 5.8899 17.87 5.9899 17.92 6.1199C17.97 6.2399 18 6.3699 18 6.4999C18 6.6299 17.97 6.7599 17.92 6.8799C17.87 6.9999 17.8 7.1099 17.71 7.2099C17.61 7.2999 17.5 7.3699 17.38 7.4199C17.26 7.4699 17.13 7.4999 17 7.4999Z"
                      fill="#ECF4FF"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/989183692302"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsApp"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
