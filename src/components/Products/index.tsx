import { useEffect, useState } from "react";
import { request } from "../../utils/request";
import { Product } from "../../types/Product";
import { useTranslation } from "react-i18next";
import Card from "../UI/Card";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Scrollbar, A11y, Navigation } from "swiper/modules";

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
      {/* <Swiper
        spaceBetween={12}
        slidesPerView={3}
        draggable={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {products.map((product: Product) => (
          <SwiperSlide>
            <Card item={product} key={product.id} language={i18n.language} />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
}

export default Products;
