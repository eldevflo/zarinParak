import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from "../../utils/request";
import Loading from "../../components/UI/Loainding";
import { Article } from "../../types/Articles";
import { useTranslation } from "react-i18next";
import axios from "axios";

function Article() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState<Article | null>(null);
  const { i18n } = useTranslation();
  const source = axios.CancelToken.source();

  const getArticle = async () => {
    try {
      const response = await request.get("/Article_Details/" + id, {
        cancelToken: source.token,
      });
      setArticle(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getArticle();
    return () => {
      if (source) source.cancel;
    };
  }, []);

  return (
    <div className="page-content container">
      {isLoading ? (
        <div className="loading">
          <Loading />
        </div>
      ) : (
        article && (
          <div className="article">
            <div className="article__image">
              <img src={article.image_thumbnail} alt="" />
            </div>
            <div className="article__title">
              <h1>
                {i18n.language == "en" ? article.English_title : article.title}
              </h1>
            </div>
            <div
              className="article__text"
              style={{
                textAlign: i18n.language == "en" ? "left" : "right",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  i18n.language == "en"
                    ? article.information_En
                    : article.information,
              }}
            ></div>
          </div>
        )
      )}
    </div>
  );
}

export default Article;
