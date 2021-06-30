import styles from "./index.module.scss";
import Link from "./link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Pagination]);

const swiperOptions: object = {
  pagination: {
    clickable: true,
    renderBullet: (index: number, className: string) =>
      `<span class="${className}">0${index + 1}</span>`,
    bulletClass: styles["swiper-pagination-bullet"],
    bulletActiveClass: styles["swiper-pagination-bullet-active"],
    clickableClass: styles["swiper-pagination"],
  },
  wrapperClass: styles["hero__swiper-wrapper"] || "swiper-wrapper",
};

const Hero: React.FC = (props) => {
  return (
    <div className={styles["hero"]}>
      <nav className={styles["hero__nav"]}>
        <Link className={styles["hero__nav-link"]} title="Works" />
        <Link className={styles["hero__nav-link"]} title="About" />
        <Link className={styles["hero__nav-link"]} title="Services" />
        <Link className={styles["hero__nav-link"]} title="Blog" />
        <Link className={styles["hero__nav-link"]} title="Contact" />
      </nav>
      <Swiper className={styles["hero__swiper"]} {...swiperOptions}>
        <SwiperSlide className={styles["hero__swiper-slide"]} key={1}>
          <h1 className={styles["hero__swiper-slide-title"]}>
            WHERE GREAT IDEAS COME TO LIFE
          </h1>
          <p className={styles["hero__swiper-slide-description"]}>
            Passionate creative studio helping startups grow their business!
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles["hero__swiper-slide"]} key={2}>
          <h1 className={styles["hero__swiper-slide-title"]}>
            WHERE GREAT IDEAS COME TO LIFE
          </h1>
          <p className={styles["hero__swiper-slide-description"]}>
            Passionate creative studio helping startups grow their business!
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles["hero__swiper-slide"]} key={3}>
          <h1 className={styles["hero__swiper-slide-title"]}>
            WHERE GREAT IDEAS COME TO LIFE
          </h1>
          <p className={styles["hero__swiper-slide-description"]}>
            Passionate creative studio helping startups grow their business!
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
