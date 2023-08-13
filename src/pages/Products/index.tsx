import { useState, useEffect } from "react";
import { request } from "../../utils/request";
import { useTranslation } from "react-i18next";
import Grid from "../../components/UI/Grid";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getProducts() {
    const response = await request.get("/Product");
    setProducts(response.data);
    setLoading(false);
  }
  const { t } = useTranslation();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="page-content products">
      <div className="container">
        <div className="products__title">
          <h1>{t("titles.products")}</h1>
        </div>
        <div className="products__body">
          {loading ? "loading" : <Grid list={products} />}
        </div>
      </div>
    </div>
  );
}

export default Products;
