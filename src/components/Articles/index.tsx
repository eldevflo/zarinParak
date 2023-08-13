import { useState, useEffect } from "react";
import { request } from "../../utils/request";
import { useTranslation } from "react-i18next";

function Articles() {
  const [articles, setArticles] = useState([]);
  async function getArticles() {
    const response = await request.get("/Article");
    const lastThreeArticles = response.data.slice(-3);
    setArticles(lastThreeArticles);
  }
  const { t } = useTranslation();

  useEffect(() => {
    getArticles();
  }, []);
  return (
    <div className="home__articles">
      <div className="home__articles__title">
        <h1>{t("titles.articles")}</h1>
      </div>
      <div className="home__articles__list"></div>
    </div>
  );
}

export default Articles;
