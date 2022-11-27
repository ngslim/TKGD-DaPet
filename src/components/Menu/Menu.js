import classes from "./Menu.module.css";
import React from "react";
import {
  BsPerson,
  BsPencil,
  BsShopWindow,
  BsQuestionSquare,
} from "react-icons/bs";
import Account from "../Account/Account";

function Menu() {
  return (
    <div className={`${classes["container-menu"]} bg-white p-3 rounded`}>
      <div className="d-flex gap-3 align-items-center py-2 px-3">
        <BsPerson />
        <div className="px-2">Thông tin cá nhân</div>
      </div>
      <div className="d-flex gap-3 align-items-center py-2 px-3">
        <BsPencil color="#098963" />
        <div className={`${classes["selected"]} fw-semibold px-2`}>
          Đăng ký khám
        </div>
      </div>
      <div className="d-flex gap-3 align-items-center py-2 px-3">
        <BsShopWindow />
        <div className="px-2">Tìm kiếm cơ sở khám</div>
      </div>
      <div className="d-flex gap-3 align-items-center py-2 px-3">
        <BsQuestionSquare />
        <div className="px-2">Hỏi đáp</div>
      </div>
      <Account />
    </div>
  );
}

Menu.propTypes = {};

export default Menu;
