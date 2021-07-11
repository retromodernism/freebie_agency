import styles from "./index.module.scss";
import Slider from "react-slick";
import nextImg from "./src/next.png";
import prevImg from "./src/prev.png";
import { MouseEventHandler } from "react";

type TestimonialPropsType = {
  text: string;
  name: string;
  position: string;
  stars: number;
};

type ArrowType = {
  className?: string;
  style?: object;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const Testimonial: React.FC<TestimonialPropsType> = ({
  text,
  name,
  position,
  stars,
}) => {
  const starsItems = [];

  for (let i = 0; i < 5; i++) {
    starsItems.push(
      <div
        className={
          i < stars
            ? `${styles.testimonials__testimonialStar} ${styles.testimonials__testimonialStar_active}`
            : styles.testimonials__testimonialStar
        }
      ></div>
    );
  }

  return (
    <div className={styles.testimonials__testimonial}>
      <p className={styles.testimonials__text}>{text}</p>
      <div className={styles.testimonials__testimonialQuote}></div>
      <div className={styles.testimonials__testimonialNameWrapper}>
        <span className={styles.testimonials__testimonialName}>{name}</span>
        <span className={styles.testimonials__testimonialSlash}>/</span>
        <span className={styles.testimonials__testimonialPosition}>
          {position}
        </span>
      </div>
      <div className={styles.testimonials__testimonialStars}>{starsItems}</div>
    </div>
  );
};

const NextArrow: React.FC<ArrowType> = ({ className, style, onClick }) => {
  const classes = className
    ? `${className} ${styles.testimonials__nextArrow}`
    : styles.testimonials__nextArrow;

  return (
    <div
      className={classes}
      onClick={onClick}
      style={{
        ...style,
        background: `url(${nextImg}) 100% 100% no-repeat`,
        outline: "unset",
        color: "unset",
        top: "unset",
        bottom: 0,
      }}
    ></div>
  );
};

const PrevArrow: React.FC<ArrowType> = ({ className, style, onClick }) => {
  const classes = className
    ? `${className} ${styles.testimonials__prevArrow}`
    : styles.testimonials__prevArrow;

  return (
    <div
      className={classes}
      onClick={onClick}
      style={{
        ...style,
        background: `url(${prevImg}) 100% 100% no-repeat`,
        outline: "unset",
        color: "unset",
        top: "unset",
        bottom: 0,
      }}
    ></div>
  );
};

const sliderParams = {
  // dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Testimonials: React.FC = () => {
  return (
    <div className={styles.testimonials}>
      <Slider {...sliderParams}>
        <Testimonial
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          name="DAVID JAMES"
          position="Web Design"
          stars={4}
        />
        <Testimonial
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          name="DAVID JAMES"
          position="Web Design"
          stars={4}
        />
      </Slider>
      {/* <Testimonial
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        name="DAVID JAMES"
        position="Web Design"
        stars={4}
      /> */}
    </div>
  );
};

export default Testimonials;
