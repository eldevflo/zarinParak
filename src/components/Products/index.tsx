import { useEffect, useState } from "react";
import { request } from "../../utils/request";
import { Product } from "../../types/Product";
import { useTranslation } from "react-i18next";
import Card from "../UI/Card";

function Products() {
  const [products, setProducts] = useState([]);
  async function getProducts() {
    const response = await request.get("/Product");
    const firstThreeProducts = response.data.slice(-3);
    setProducts(firstThreeProducts);
  }
  const { t, i18n } = useTranslation();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="home__products">
      <div className="home__products__title">
        <h1>{t("titles.products")}</h1>
      </div>
      <div className="home__products__list">
        {products.map((product: Product) => (
          <Card item={product} key={product.id} language={i18n.language} />
        ))}
      </div>
    </div>
  );
}

export default Products;
