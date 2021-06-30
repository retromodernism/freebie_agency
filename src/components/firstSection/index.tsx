import styles from "./index.module.scss";
import img1 from "./src/img1.png";
import img2 from "./src/img2.png";

const FirstSection: React.FC = (props) => {
  return (
    <div className={styles["firstSection"]}>
      <div className={styles["firstSection__content"]}>
        <div className={styles["firstSection__title"]}>
          <span
            className={`${styles["firstSection__title-text"]} ${styles["firstSection__title-text_bold"]}`}
          >
            WE ARE
          </span>
          <br />
          <span className={styles["firstSection__title-text"]}>THE SQWD</span>
        </div>
        <div className={styles["firstSection__images"]}>
          <div
            className={styles["firstSection__image"]}
            style={{
              background: `url(${img2}) 100% 100% no-repeat`,
              top: 168,
              left: 613,
            }}
          ></div>
          <div
            className={styles["firstSection__image"]}
            style={{
              height: 418,
              top: 62,
              left: 403,
            }}
          ></div>
          <div
            className={styles["firstSection__image"]}
            style={{
              background: `url(${img1}) 100% 100% no-repeat`,
              left: 193,
            }}
          ></div>
        </div>
        <div
          className={styles["firstSection__description"]}
          style={{
            top: 219,
            left: 51,
          }}
        >
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit, sed do
          <br />
          eiusmod tempor incididunt.
        </div>
        <div
          className={styles["firstSection__description"]}
          style={{
            top: 404,
            left: 871,
          }}
        >
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit, sed do
          <br />
          eiusmod tempor incididunt.
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
