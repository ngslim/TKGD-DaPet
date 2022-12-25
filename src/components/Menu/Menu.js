import classes from "./Menu.module.css";
import React from "react";
import {
  BsPerson,
  BsPencil,
  BsShopWindow,
  BsQuestionSquare,
} from "react-icons/bs";
import Account from "../Account/Account";
import MenuItem from "./MenuItem/MenuItem";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  const gotoPageNotFoundHandler = () => {
    navigate("/page-not-found");
  };

  return (
    <div className={`${classes["container-menu"]} bg-white p-3 rounded`}>
      <MenuItem
        icon={<BsPerson />}
        title="Thông tin cá nhân"
        onClick={gotoPageNotFoundHandler}
      />
      <MenuItem
        icon={<BsPencil color="#7D5A50" />}
        title="Đăng ký khám"
        selected="selected"
        onClick={gotoPageNotFoundHandler}
      />
      <MenuItem
        icon={<BsShopWindow />}
        title="Tìm kiếm cơ sở khám"
        onClick={gotoPageNotFoundHandler}
      />
      <MenuItem
        icon={<BsQuestionSquare />}
        title="Hỏi đáp"
        onClick={gotoPageNotFoundHandler}
      />
      <Account />
    </div>
  );
}

Menu.propTypes = {};

export default Menu;
