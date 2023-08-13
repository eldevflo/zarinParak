import { Product } from "../../../types/Product";

function Card({ item, language = "fa" }: { item: Product; language?: string }) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="card__footer">
        <div className="card__caption">
          <div className="card__title">
            <h3>
              {language === "fa"
                ? item.name.substring(0, 20)
                : item.English_name.substring(0, 20)}
            </h3>
          </div>
          <div className="card__description">
            {item.comment_admin}
            گرانول پت یکی از انواع فرآورده‌های حاصل از پلیمرهای شیمیایی است که
            به صورت دانه‌های ریز و کریستالی ساخته می‌شود.
          </div>
        </div>
        <div className="card__link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="59"
            height="59"
            viewBox="0 0 60 60"
            fill="none"
          >
            <path
              d="M29.7708 5.80371C16.2503 5.80371 5.23262 16.8214 5.23262 30.3419C5.23262 43.8625 16.2503 54.8801 29.7708 54.8801C43.2914 54.8801 54.309 43.8625 54.309 30.3419C54.309 16.8214 43.2914 5.80371 29.7708 5.80371ZM34.1632 37.7034C34.8748 38.415 34.8748 39.5928 34.1632 40.3044C33.7951 40.6725 33.3289 40.8443 32.8626 40.8443C32.3964 40.8443 31.9302 40.6725 31.5621 40.3044L22.9001 31.6424C22.1885 30.9308 22.1885 29.753 22.9001 29.0414L31.5621 20.3794C32.2737 19.6678 33.4515 19.6678 34.1632 20.3794C34.8748 21.091 34.8748 22.2688 34.1632 22.9804L26.8017 30.3419L34.1632 37.7034Z"
              fill="url(#paint0_linear_48_2)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_48_2"
                x1="48.3403"
                y1="29.0155"
                x2="8.21699"
                y2="30.6735"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#B106C0" />
                <stop offset="1" stop-color="#D869FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Card;
