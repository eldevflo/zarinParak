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
      {/* <div className="home__products__list">
        {products.map((product: Product) => (
          <Card item={product} key={product.id} language={i18n.language} />
        ))}
      </div> */}
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
          <svg
            width="45"
            height="45"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.2166 1.70278C5.52549 1.70278 1.70276 5.5255 1.70276 10.2166C1.70276 14.9078 5.52549 18.7305 10.2166 18.7305C14.9078 18.7305 18.7305 14.9078 18.7305 10.2166C18.7305 5.5255 14.9078 1.70278 10.2166 1.70278ZM11.7406 12.7708C11.9875 13.0177 11.9875 13.4264 11.7406 13.6733C11.6129 13.801 11.4511 13.8606 11.2894 13.8606C11.1276 13.8606 10.9659 13.801 10.8381 13.6733L7.83275 10.6679C7.58584 10.421 7.58584 10.0123 7.83275 9.76541L10.8381 6.76002C11.085 6.51311 11.4937 6.51311 11.7406 6.76002C11.9875 7.00692 11.9875 7.41558 11.7406 7.66249L9.18645 10.2166L11.7406 12.7708Z"
              fill="url(#paint0_linear_134_59)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_134_59"
                x1="16.6596"
                y1="9.75644"
                x2="2.73823"
                y2="10.3317"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="#D869FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="next" ref={navigationNextRef}>
          <svg
            width="45"
            height="45"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_dii_115_308)">
              <path
                d="M10.2167 18.7305C14.9079 18.7305 18.7306 14.9078 18.7306 10.2166C18.7306 5.5255 14.9079 1.70277 10.2167 1.70277C5.52557 1.70277 1.70285 5.5255 1.70285 10.2166C1.70285 14.9078 5.52557 18.7305 10.2167 18.7305ZM8.69273 7.66248C8.44583 7.41558 8.44583 7.00691 8.69273 6.76001C8.82044 6.6323 8.98221 6.5727 9.14397 6.5727C9.30573 6.5727 9.4675 6.6323 9.59521 6.76001L12.6006 9.76541C12.8475 10.0123 12.8475 10.421 12.6006 10.6679L9.59521 13.6733C9.3483 13.9202 8.93964 13.9202 8.69274 13.6733C8.44583 13.4264 8.44583 13.0177 8.69274 12.7708L11.2469 10.2166L8.69273 7.66248Z"
                fill="url(#paint0_linear_115_308)"
              />
            </g>
            <defs>
              <filter
                id="filter0_dii_115_308"
                x="-1.1045"
                y="-1.10451"
                width="22.6424"
                height="23.7468"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1.1045" />
                <feGaussianBlur stdDeviation="0.552251" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_115_308"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_115_308"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1.93288" />
                <feGaussianBlur stdDeviation="0.828377" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_115_308"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-1.38063" />
                <feGaussianBlur stdDeviation="0.552251" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect2_innerShadow_115_308"
                  result="effect3_innerShadow_115_308"
                />
              </filter>
              <linearGradient
                id="paint0_linear_115_308"
                x1="3.77379"
                y1="10.6769"
                x2="17.6951"
                y2="10.1016"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="#D869FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Products;
