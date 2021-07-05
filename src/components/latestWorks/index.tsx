import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AppStateType } from "./../../redux/store";
import { WorkType, getWorks, CategoryType } from "./../../redux/modules/works";
import LatestWorksNavLeaf from "./latestWorksNavLeaf";

type PropsType = {
  works: WorkType[];
  categories: CategoryType[];
  getWorks: Function;
};

const LatestWorks: React.FC<PropsType> = ({ works, categories, getWorks }) => {
  useEffect(() => {
    getWorks();
  }, []);

  return (
    <div className={styles["latestWorks"]}>
      <div className={styles["latestWorks__header"]}>
        <h1 className={styles["latestWorks__title"]}>Latest Works</h1>
        <ul className={styles["latestWorks__nav"]}>
          {categories.map(({ category, isPicked }, index) => (
            <LatestWorksNavLeaf
              className={
                isPicked
                  ? `${styles["latestWorks__category"]} ${styles["latestWorks__category_active"]}`
                  : styles["latestWorks__category"]
              }
              title={category}
              key={index}
              // customOnClick={setActiveWorkCategory.bind(null, title)}
            />
          ))}
        </ul>
      </div>
      <div className={styles["latestWorks__content"]}>
        {categories
          .filter(({ isPicked }) => isPicked)[0]
          ?.works.map((work, index) => {
            const { isActive, image, title, description, readMore } = work;
            const classes =
              index % 2
                ? `${styles["latestWorks__item"]} ${styles["latestWorks__item_odd"]}`
                : `${styles["latestWorks__item"]} ${styles["latestWorks__item_even"]}`;
            return (
              <div
                className={classes}
                key={index}
                style={{
                  gridRow: `${index + 1}/${index + 3}`,
                }}
              >
                <div
                  className={styles["latestWorks__item-title"]}
                  dangerouslySetInnerHTML={{ __html: title }}
                  style={{
                    textDecoration: isActive
                      ? `none`
                      : `line-through 3px #70BF73`,
                  }}
                ></div>
                <div className={styles["latestWorks__item-image-wrapper"]}>
                  <div
                    className={styles["latestWorks__item-image"]}
                    style={{
                      background: `url(${image}) 100% 100% no-repeat`,
                    }}
                  ></div>
                </div>
                <div className={styles["latestWorks__item-description"]}>
                  <div
                    className={styles["latestWorks__item-description-title"]}
                  >
                    {description.title}
                  </div>
                  <div className={styles["latestWorks__item-description-text"]}>
                    {description.text}
                  </div>
                  {readMore && (
                    <div
                      className={
                        styles["latestWorks__item-description-read-more"]
                      }
                      style={{
                        textDecoration: isActive
                          ? `none`
                          : `line-through 3px #70BF73`,
                      }}
                    >
                      Read More
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
      <div className={styles["latestWorks__view-more"]}>View More</div>
    </div>
  );
};

export default connect(
  ({ works }: AppStateType) => ({
    works: works.works,
    categories: works.categories,
  }),
  {
    getWorks,
  }
)(LatestWorks);
