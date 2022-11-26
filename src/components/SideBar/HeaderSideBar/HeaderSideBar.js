import classes from "./HeaderSideBar.module.css";

const HeaderSideBar = () => {
  return (
    <header className={classes["header-sidebar"]}>
      <div className={classes["image-text"]}>
        <span className="image">
          <img src="logo.png" alt="" />
        </span>

        <div className={`text ${classes["logo-text"]}`}>
          <span className={classes["name"]}>Pet Care</span>
          <span className={classes["profession"]}>Group 6</span>
        </div>
      </div>

      <i className={`fa-solid fa-chevron-left ${classes["toggle"]}`}></i>
    </header>
  );
};

export default HeaderSideBar;
