import Intention from "../../components/Intention";
import hero from "../../assets/images/hero.png";
import Products from "../../components/Products";
import { useTranslation } from "react-i18next";

function Home() {
  const { t, i18n } = useTranslation();
  console.log(i18n.language);

  return (
    <div className="home">
      <div className="home__hero">
        <img
          src={hero}
          alt="hero"
          className="home__hero__image"
          width={500}
          height={500}
        />
        <div className="home__hero__intro">
          <h1>{t("main.header")}</h1>
        </div>
      </div>

      <Intention />
      <Products />
      {/* <Articles /> */}
    </div>
  );
}

export default Home;
