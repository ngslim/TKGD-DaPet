import classes from "./MenuBar.module.css";

import NavBarItem from "../NavBarItem/NavBarItem";
import SearchBox from "../SearchBox/SearchBox";
import ProfileCard from "../../Card/ProfileCard/ProfileCard";
import { useNavigate } from "react-router-dom";

const MenuBar = ({ className }) => {
  const navigate = useNavigate();

  const gotoPageNotFoundHandler = () => {
    navigate("/page-not-found");
  };

  return (
    <div className={classes["menu-bar"]}>
      <div className={classes["menu"]}>
        <SearchBox className={className} />

        <ul>
          <NavBarItem
            icon="fa-solid fa-people-roof"
            text="Quan ly don"
            className={{ ...className, ...classes }}
            onClick={gotoPageNotFoundHandler}
          />
          <NavBarItem
            icon="fa-sharp fa-solid fa-calendar-week"
            text="Lich trinh"
            className={{ ...className, ...classes }}
            onClick={gotoPageNotFoundHandler}
          />
          <NavBarItem
            icon="fa-regular fa-messages-question"
            text="Tu van"
            className={{ ...className, ...classes }}
            onClick={gotoPageNotFoundHandler}
          />
          <NavBarItem
            icon="fa-sharp fa-solid fa-clock-rotate-left"
            text="Lich su"
            className={{ ...className, ...classes }}
            onClick={gotoPageNotFoundHandler}
          />
        </ul>

        <ProfileCard />
      </div>
    </div>
  );
};

export default MenuBar;
