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

  const gotoOrderHandler = () => {
    navigate("/order");
  };

  return (
    <div className={classes["menu-bar"]}>
      <div className={classes["menu"]}>
        <SearchBox className={className} />

        <ul>
          <NavBarItem
            icon="fa-solid fa-people-roof"
            text="Quản lý đơn"
            className={{ ...className, ...classes }}
            onClick={gotoOrderHandler}
          />
          <NavBarItem
            icon="fa-sharp fa-solid fa-calendar-week"
            text="Lịch trình"
            className={{ ...className, ...classes }}
            onClick={gotoPageNotFoundHandler}
          />
          <NavBarItem
            icon="fa-sharp fa-solid fa-clipboard-question"
            text="Tư vấn"
            className={{ ...className, ...classes }}
            onClick={gotoPageNotFoundHandler}
          />
          <NavBarItem
            icon="fa-sharp fa-solid fa-clock-rotate-left"
            text="Lịch sử"
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
