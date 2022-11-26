import classes from "./NavBarItem.module.css";

const NavBarItem = ({ icon, text, className }) => {
  return (
    <li className={classes["nav-link"]}>
      <button className={`${className["btn-navbar"]}`}>
        <i className={`${icon} ${className["icon"]}`}></i>
        <span className={`${className["text"]} nav-text`}>{text}</span>
      </button>
    </li>
  );
};

export default NavBarItem;
