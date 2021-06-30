import styles from "./index.module.scss";
import { useState } from "react";

type props = {
  className?: string;
  href?: string;
  title: string;
};

const Link: React.FC<props> = ({ className, title, href = "#" }: props) => {
  const [isHovered, setHovered] = useState(false);

  const classes = isHovered
    ? `${styles["link"]} ${styles["link_hovered"]}`
    : styles["link"];

  return (
    <a
      href={href}
      className={`${className} ${classes}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {title}
    </a>
  );
};

export default Link;
