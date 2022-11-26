import classes from "./Items.module.css";

function Items({ currentItems, className }) {
  return (
    <>
      <li className={`${classes["page__numbers"]} ${className["page__items"]}`}>
        {currentItems}
      </li>
    </>
  );
}

export default Items;
