import classes from "./BookCard.module.css";

const BookCard = ({ item, onClick }) => {
  return (
    <div
      className={`${classes["content-card"]} rounded p-3`}
      onClick={(event) => onClick({ name: item.name, address: item.address })}
    >
      <div className="d-flex gap-5 px-3">
        <div>
          <img src={item.image} className="img-fluid" alt="" />
        </div>
        <div className={classes["container-information"]}>
          <div className="my-1">
            <span className={classes["heading-name"]}>{item.name}</span>
            <span className={classes["date-timeline"]}>
              {item.date} {item.timeline}
            </span>
          </div>
          <div className={classes["text"]}>{item.description}</div>
          <div className={classes["address"]}>{item.address}</div>

          <div className={classes["contact"]}>
            <span className={classes["email"]}>{item.email}</span>
            <span className={classes["phone"]}>{item.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
