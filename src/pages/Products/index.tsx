import { useState, useEffect } from "react";
import { request } from "../../utils/request";
import { useTranslation } from "react-i18next";
// import Grid from "../../components/UI/Grid";
import Loading from "../../components/UI/Loainding";
import { Product } from "../../types/Product";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const source = axios.CancelToken.source();

  async function getProducts() {
    try {
      const response = await request.get("/Product", {
        cancelToken: source.token,
      });
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  const { t, i18n } = useTranslation();

  useEffect(() => {
    getProducts();
    return () => {
      if (source) source.cancel;
    };
  }, []);
  return (
    <div className="page-content products">
      <div className="container">
        <div className="products__title">
          <h1>{t("titles.products")}</h1>
        </div>
        {loading ? (
          <div className="loading">
            <Loading />
          </div>
        ) : (
          <div className="products__body">
            {products.map((product: Product) => (
              <div className="product">
                <div className="product__right">
                  <img src={product.image} alt="" />
                </div>
                <div className="product__left">
                  <div className="product__title">
                    {i18n.language === "en"
                      ? product.English_name
                      : product.name}
                  </div>
                  <div
                    className="product__description"
                    dangerouslySetInnerHTML={{
                      __html:
                        i18n.language === "en"
                          ? product.information_Eng
                            ? product.information_Eng
                            : ""
                          : product.information
                          ? product.information
                          : "",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
