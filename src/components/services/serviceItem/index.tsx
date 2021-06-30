import styles from "./index.module.scss";
import { useState } from "react";

type props = {
  className: string;
  icon: any;
  title: string;
  description: string;
  href?: string;
};

const ServiceItem: React.FC<props> = ({
  className,
  icon,
  title,
  description,
  href = "#",
}: props) => {
  const [isHovered, setHovered] = useState(false);
  const hover = () => setHovered(true);
  const unHover = () => setHovered(false);

  return (
    <div
      className={
        isHovered
          ? `${className} ${styles["serviceItem"]} ${styles["serviceItem_hover"]}`
          : `${className} ${styles["serviceItem"]}`
      }
      onMouseEnter={hover}
      onMouseLeave={unHover}
    >
      <div className={styles["serviceItem__title"]}>{title}</div>
      <div
        className={
          isHovered
            ? `${styles["serviceItem__icon"]} ${styles["serviceItem__icon_hover"]}`
            : styles["serviceItem__icon"]
        }
        style={{ backgroundImage: `url(${icon})` }}
      ></div>
      <div className={styles["serviceItem__description"]}>{description}</div>
      <a
        href={href}
        className={
          isHovered
            ? `${styles["serviceItem__read-more"]} ${styles["serviceItem__read-more_hover"]}`
            : styles["serviceItem__read-more"]
        }
      >
        Read More
      </a>
    </div>
  );
};

export default ServiceItem;
