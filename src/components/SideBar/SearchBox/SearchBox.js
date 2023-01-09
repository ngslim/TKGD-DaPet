import classes from "./SearchBox.module.css";

const SearchBox = ({ className }) => {
  return (
    <li className={classes["search-box"]}>
      <i
        className={`fa-sharp fa-solid fa-magnifying-glass ${className["icon"]}`}
      ></i>
      <input type="text" placeholder="Tìm kiếm..." />
    </li>
  );
};

export default SearchBox;
