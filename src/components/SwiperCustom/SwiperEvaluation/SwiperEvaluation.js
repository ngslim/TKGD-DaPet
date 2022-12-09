// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import classes from "./SwiperEvaluation.module.css";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperEvaluationItem = ({ item }) => {
  return (
    <div className={classes["evaluation-item"]}>
      <p>
        <i
          className={`fa-solid fa-quote-left ${classes["quote-icon-left"]}`}
        ></i>
        {item.comment}
        <i
          className={`fa-solid fa-quote-right ${classes["quote-icon-right"]}`}
        ></i>
      </p>
      <img src={item.image} className={classes["evaluation-img"]} alt="" />
      <h3>{item.name}</h3>
      <h4>{item.position}</h4>
    </div>
  );
};

const SwiperEvaluation = ({ data }) => {
  return (
    <section className={`${classes["swiper-custom"]} ${classes["section-bg"]}`}>
      <div className={`${classes["swiper-container"]} container`}>
        <div className={classes["section-title"]}>
          <h2>Evaluations</h2>
          <p>Một số trải nghiệm từ khách hàng của DaPet</p>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          speed={600}
          loop={true}
          slidesPerView="auto"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            type: "bullets",
            clickable: true,
            bulletActiveClass: `${classes["swiper-pagination-bullet-active"]}`,
            horizontalClass: `${classes["custom-pagination"]}`,
            renderBullet: function (index, className) {
              return `<span class="${classes["swiper-pagination-bullet"]} ${className}"></span>`;
            },
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <SwiperEvaluationItem item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default SwiperEvaluation;
