import classes from "./NavBarItem.module.css";

const NavBarItem = ({ icon, text, className, onClick }) => {
  return (
    <li className={classes["nav-link"]} onClick={onClick}>
      <button className={`${className["btn-navbar"]}`}>
        <i className={`${icon} ${className["icon"]}`}></i>
        <span className={`${className["text"]} nav-text`}>{text}</span>
      </button>
    </li>
  );
};

export default NavBarItem;
