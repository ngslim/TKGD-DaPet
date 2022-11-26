import Items from "./Items/Items";
import classes from "./Pagination.module.css";

const Pagination = () => {
  return (
    <div className={classes["pagination"]}>
      <ul className={classes["page"]}>
        <li className={`${classes["page__items"]} ${classes["page__btn"]}`}>
          <span className="material-icons">
            <i className="fa-solid fa-chevron-left"></i>
          </span>
        </li>

        <Items currentItems={1} className={classes} />
        <Items currentItems={2} className={classes} />
        <Items currentItems={3} className={classes} />
        <Items currentItems={4} className={classes} />
        <li className={`${classes["page__items"]} ${classes["page__dots"]}`}>
          ...
        </li>
        <Items currentItems={10} className={classes} />

        <li className={`${classes["page__items"]} ${classes["page__btn"]}`}>
          <span className="material-icons">
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
