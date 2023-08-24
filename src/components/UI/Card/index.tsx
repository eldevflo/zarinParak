import { Article } from "../../../types/Articles";
import { Product } from "../../../types/Product";
import SeeMoreIcon from "../icons/SeeMoreIcon";

function Card({
  item,
  language = "fa",
}: {
  item: Product | Article;
  language?: string | undefined;
}) {
  return (
    <>
      {!item ? (
        <></>
      ) : "amount" in item ? (
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
                    : item.English_name?.substring(0, 20)}
                </h3>
              </div>
              <div
                className="card__description"
                dangerouslySetInnerHTML={{
                  __html:
                    language === "en"
                      ? item.information_Eng
                        ? item.information_Eng
                        : ""
                      : item.information
                      ? item.information
                      : "",
                }}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card__image">
            <img src={item.image_thumbnail} alt={item.title} />
          </div>
          <div className="card__footer">
            <div className="card__caption">
              <div className="card__title">
                <h3>{language === "fa" ? item.title : item.English_title}</h3>
              </div>
            </div>
            <div className="card__link">
              <a href={`/article/${item.id}`}>
                <SeeMoreIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
