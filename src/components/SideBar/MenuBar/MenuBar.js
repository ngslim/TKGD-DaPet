import classes from "./MenuBar.module.css";

import NavBarItem from "../NavBarItem/NavBarItem";
import SearchBox from "../SearchBox/SearchBox";
import ProfileCard from "../../Card/ProfileCard/ProfileCard";

const MenuBar = ({ className }) => {
  return (
    <div className={classes["menu-bar"]}>
      <div className={classes["menu"]}>
        <SearchBox className={className} />

        <ul>
          <NavBarItem
            icon="fa-solid fa-people-roof"
            text="Quan ly don"
            className={{ ...className, ...classes }}
          />
          <NavBarItem
            icon="fa-sharp fa-solid fa-calendar-week"
            text="Lich trinh"
            className={{ ...className, ...classes }}
          />
          <NavBarItem
            icon="fa-regular fa-messages-question"
            text="Tu van"
            className={{ ...className, ...classes }}
          />
          <NavBarItem
            icon="fa-sharp fa-solid fa-clock-rotate-left"
            text="Lich su"
            className={{ ...className, ...classes }}
          />
        </ul>

        <ProfileCard />
      </div>

      <div className="bottom-content">
        <li>
          <button className={classes["btn-navbar"]}>
            <i className={`bx bx-log-out ${className["icon"]}`}></i>
            <span className={`${className["text"]} nav-text`}>Logout</span>
          </button>
        </li>
      </div>
    </div>
  );
};

export default MenuBar;
