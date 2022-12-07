import classes from "./BookCard.module.css";

const BookCard = ({ name, text, image, onClick }) => {
  return (
    <div
      className={`${classes["content-card"]} rounded p-3`}
      onClick={(event) => onClick(name)}
    >
      <div className="d-flex flex-column gap-2 px-3">
        <div>
          <img src={image} className="img-fluid" alt="" />
        </div>
        <div className="fs-5 fw-bold">{name}</div>
        <div className={classes["text"]}>{text}</div>
      </div>
    </div>
  );
};

export default BookCard;
