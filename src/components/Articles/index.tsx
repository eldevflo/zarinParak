import { useState, useEffect, useRef } from "react";
import { request } from "../../utils/request";
import { useTranslation } from "react-i18next";
import Card from "../UI/Card";
import { Article } from "../../types/Articles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCards } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/react";
import PrevIcon from "../UI/icons/PrevIcon";
import NextIcon from "../UI/icons/NextIcon";

function Articles() {
  const [articles, setArticles] = useState([]);
  async function getArticles() {
    const response = await request.get("/Article");
    const lastThreeArticles = response.data.slice(-3);
    setArticles(lastThreeArticles);
  }
  const { t, i18n } = useTranslation();

  useEffect(() => {
    getArticles();
  }, []);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      {!articles.length ? (
        <div></div>
      ) : (
        <div className="home__products home__articles">
          <div className="home__products__title">
            <h1>{t("titles.articles")}</h1>
          </div>
          <div className="home__products__list">
            {articles.map((article: Article) => (
              <div>
                <a href={`/article/${article.id}`}>
                  <Card language={i18n.language} item={article} />
                </a>
              </div>
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
              {articles.map((article: Article) => (
                <SwiperSlide key={article.id}>
                  <a href={`/article/${article.id}`}>
                    <Card item={article} language={i18n.language} />
                  </a>
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
      )}
    </>
  );
}

export default Articles;
