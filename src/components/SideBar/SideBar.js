// import { useEffect } from "react";
// import HeaderSideBar from "./HeaderSideBar/HeaderSideBar";
import MenuBar from "./MenuBar/MenuBar";
import classes from "./SideBar.module.css";

const SideBar = () => {
  return (
    <nav className={classes["sidebar"]}>
      {/* <HeaderSideBar className={classes} /> */}
      <MenuBar className={classes} />
    </nav>
  );
};

export default SideBar;
