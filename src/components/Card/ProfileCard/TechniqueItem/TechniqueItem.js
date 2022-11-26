import classes from "./TechniqueItem.module.css";

const TechniqueItem = ({ title, text }) => {
  return (
    <div className={classes["info"]}>
      <h6>{title}</h6>
      <span className={classes["technique-text"]}>{text}</span>
    </div>
  );
};

export default TechniqueItem;
