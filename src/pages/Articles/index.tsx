import { useState, useEffect } from "react";
import { request } from "../../utils/request";
import { useTranslation } from "react-i18next";
import Loading from "../../components/UI/Loainding";
import { Article } from "../../types/Articles";
import axios from "axios";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const source = axios.CancelToken.source();

  async function getArticles() {
    try {
      const response = await request.get("/Article", {
        cancelToken: source.token,
      });
      setArticles(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  const { t, i18n } = useTranslation();

  useEffect(() => {
    getArticles();
    return () => {
      if (source) source.cancel;
    };
  }, []);

  return (
    <>
      <div className="page-content products">
        <div className="container">
          <div className="products__title">
            <h1>{t("titles.articles")}</h1>
          </div>
          {loading ? (
            <div className="loading">
              <Loading />
            </div>
          ) : (
            <div className="products__body">
              {articles.map((article: Article) => (
                <a key={article.id} href={`article/${article.id}`}>
                  <div className="product">
                    <div className="product__right">
                      <img src={article.image_thumbnail} alt="" />
                    </div>
                    <div className="product__left">
                      <div className="product__title">
                        {i18n.language === "en"
                          ? article.English_title
                          : article.title}
                      </div>
                      <div
                        className="product__description"
                        dangerouslySetInnerHTML={{
                          __html:
                            i18n.language === "en"
                              ? article.comment_admin_En
                                ? article.comment_admin_En
                                : ""
                              : article.comment_admin
                              ? article.comment_admin
                              : "",
                        }}
                      ></div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Articles;
