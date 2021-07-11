import { useState } from "react";
import styles from "./index.module.scss";
import person1Image from "./src/Person1.png";
import person2Image from "./src/Person2.png";
import person3Image from "./src/Person3.png";

type ItemPropsType = {
  className: string;
  image: string;
  name: string;
  position: string;
  description: string;
};

const Item: React.FC<ItemPropsType> = ({
  className,
  image,
  name,
  position,
  description,
}) => {
  const [isHovered, setHover] = useState(false);
  return (
    <div
      className={className}
      style={{
        background: `url(${image}) 100% 100% no-repeat`,
      }}
      onMouseEnter={setHover.bind(null, true)}
      onMouseLeave={setHover.bind(null, false)}
    >
      <div
        className={
          isHovered
            ? `${styles.team__itemFooter} ${styles.team__itemFooter_hover}`
            : styles.team__itemFooter
        }
      >
        <div className={styles.team__itemFooterName}>{name}</div>
        <div className={styles.team__itemFooterPosition}>{position}</div>
        <div className={styles.team__itemFooterDescription}>{description}</div>
      </div>
    </div>
  );
};

const Team: React.FC = (props) => {
  return (
    <div className={styles.team}>
      <div className={styles.team__content}>
        <div className={styles.team__title}>The Team</div>
        <Item
          className={styles.team__item}
          image={person1Image}
          name="Tom Jones"
          position="Creative Director"
          description="Create with simplicity in mind!"
        />
        <Item
          className={styles.team__item}
          image={person2Image}
          name="Michael Fraup"
          position="Creative Director"
          description="Create with simplicity in mind!"
        />
        <Item
          className={styles.team__item}
          image={person3Image}
          name="Tim Cahill"
          position="Creative Director"
          description="Create with simplicity in mind! Create with simplicity in mind! Create with simplicity in mind! Create with simplicity in mind!"
        />
      </div>
    </div>
  );
};

export default Team;
