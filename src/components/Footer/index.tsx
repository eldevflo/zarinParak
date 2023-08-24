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
                  className="telegram"
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
                <a
                  href="https://wa.me/+989183692302"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="#fff"
                    version="1.1"
                    id="Capa_1"
                    width="24"
                    height="24"
                    viewBox="0 0 30.667 30.667"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017   c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382   c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076   c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427   c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437   c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536   c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609   c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611   c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787   c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739   C23.307,19.268,23.307,18.533,23.214,18.38z" />
                    </g>
                  </svg>
                </a>
                <a
                  href="https://t.me/Majidmakantalab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"
                      fill="#ffff"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
