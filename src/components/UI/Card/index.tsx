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
            {language == "en"
              ? item.information_En.substring(0, 100) + "..."
              : item.information.substring(0, 100) + "..."}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
