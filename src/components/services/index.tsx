import styles from "./index.module.scss";

import icon1 from "./src/1.png";
import icon2 from "./src/2.png";
import icon3 from "./src/3.png";

import Item from "./serviceItem";

const Services: React.FC = (props) => {
  return (
    <div className={styles["services"]}>
      <div className={styles["services__content"]}>
        <div className={styles["services__title"]}>Our Services</div>
        {/* <div className={styles["services__item"]} key={1}>
          <div className={styles["services__item-title"]}>Branding</div>
          <div
            className={styles["services__item-icon"]}
            style={{ backgroundImage: `url(${icon1})` }}
          ></div>
          <div className={styles["services__item-description"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </div>
          <div className={styles["services__item-read-more"]}>Read More</div>
        </div> */}
        <Item
          className={`${styles["services__item"]}`}
          icon={icon1}
          title="Branding"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
        <Item
          className={`${styles["services__item"]}`}
          icon={icon2}
          title="Design"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
        <Item
          className={`${styles["services__item"]}`}
          icon={icon3}
          title="Development"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
      </div>
    </div>
  );
};

export default Services;
