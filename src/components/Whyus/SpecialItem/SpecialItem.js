import classes from "./SpecialItem.module.css";

const SpecialItem = ({ number, title, text, onClick }) => {
  return (
    <div className="col-lg-4 mt-4 mt-lg-0" onClick={onClick}>
      <div className={classes["box"]}>
        <span>{number}</span>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SpecialItem;
