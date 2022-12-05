// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import classes from "./SwiperClinic.module.css";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperClinicItem = ({ item }) => {
  return (
    <div className={`row ${classes["clinic-item"]}`}>
      <div className="col-lg-6">
        <img src={item.image} className="img-fluid" alt="" />
      </div>
      <div className="col-lg-6 pt-4 pt-lg-0 content">
        <h3>{item.title}</h3>
        <div className={classes["address"]}>
          <p>
            <span>{item.address}</span>
          </p>
        </div>
        <p className="fst-italic">{item.description}</p>
        <ul>
          {item.feature.map((item, index) => {
            return (
              <li key={index}>
                <i className="fa-regular fa-circle-check"></i> {item}
              </li>
            );
          })}
        </ul>
        <p>{item.contact}</p>
      </div>
    </div>
  );
};

const SwiperClinic = ({ data }) => {
  return (
    <section className={`${classes["swiper-custom"]}`}>
      <div className={`${classes["swiper-container"]} container`}>
        <div className={classes["section-title"]}>
          <h2>Clinics</h2>
          <p>Explore best clinic in our website</p>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          speed={600}
          loop={true}
          slidesPerView={1}
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
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <SwiperClinicItem item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default SwiperClinic;
