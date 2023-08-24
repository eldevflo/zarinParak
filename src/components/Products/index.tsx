import { useEffect, useRef, useState } from "react";
import { request } from "../../utils/request";
import { Product } from "../../types/Product";
import { useTranslation } from "react-i18next";
import Card from "../UI/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCards } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/react";
import PrevIcon from "../UI/icons/PrevIcon";
import NextIcon from "../UI/icons/NextIcon";

function Products() {
  const [products, setProducts] = useState([]);
  async function getProducts() {
    const response = await request.get("/Product");
    const firstThreeProducts = response.data.slice(-3);
    setProducts(firstThreeProducts);
  }
  const { t, i18n } = useTranslation();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
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
      <div className="home__products__mobile-list">
        <Swiper
          spaceBetween={12}
          slidesPerView={1}
          draggable={true}
          observer
          observeParents
          parallax
          loop={true}
          // slidesPerView={2}
          effect="slide"
          autoplay={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          modules={[Navigation, EffectCards]}
          centeredSlides={true}
          roundLengths={true}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
        >
          {products.map((product: Product) => (
            <SwiperSlide key={product.id}>
              <Card item={product} language={i18n.language} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="prev" ref={navigationPrevRef}>
          <PrevIcon />
        </div>
        <div className="next" ref={navigationNextRef}>
          <NextIcon />
        </div>
      </div>
    </div>
  );
}

export default Products;
