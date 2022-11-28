import MenuBar from "./MenuBar/MenuBar";
import classes from "./SideBar.module.css";

const SideBar = () => {
  return (
    <nav className={classes["sidebar"]}>
      <MenuBar className={classes} />
    </nav>
  );
};

export default SideBar;
