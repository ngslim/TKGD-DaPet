import classes from "./BookCard.module.css";

const BookCard = ({ name, text, onClick }) => {
  return (
    <div className={`${classes["content-card"]} rounded p-3`} onClick={onClick}>
      <div className="d-flex flex-column gap-2 px-3">
        <div className={classes["img-card"]}></div>
        <div className="fs-5 fw-bold">{name}</div>
        <div className={classes["text"]}>{text}</div>
      </div>
    </div>
  );
};

export default BookCard;
