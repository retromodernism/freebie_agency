import styles from "./index.module.scss";

type PropsType = {
  title: string;
  className?: string;
  customOnClick?: () => void;
};

const LatestWorksNavLeaf: React.FC<PropsType> = ({
  className,
  title,
  customOnClick,
}) => {
  const classes = className
    ? `${className} ${styles["latestWorksNavLeaf"]}`
    : styles["latestWorksNavLeaf"];
  return (
    <li
      className={classes}
      {...{ onClick: customOnClick ? customOnClick : undefined }}
    >
      {title}
    </li>
  );
};

export default LatestWorksNavLeaf;
