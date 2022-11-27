import React from "react";
import { BsClipboard, BsShopWindow, BsClockHistory } from "react-icons/bs";
import classes from "./Account.module.css";

function Account() {
  return (
    <div className={`${classes["profile-account"]} bg-white p-3 rounded`}>
      <div className={`${classes["img-account"]} mx-auto mb-4 mt-4`}></div>
      <div>
        <div className="d-flex gap-5 py-2 justify-content-center">
          <div className="fw-bold">username</div>
        </div>
        <div className="d-flex gap-5 py-2 justify-content-center">
          <div className="fw-light">0123456789</div>
        </div>
        <div className="d-flex gap-3 align-items-center py-2 px-3">
          <BsClipboard color="#098963" />
          <div className={`${classes["selected"]} fw-bold px-2`}>
            Danh sách thú cưng
          </div>
        </div>
        <div className="d-flex gap-3 align-items-center py-2 px-3">
          <BsShopWindow />
          <div className="px-2">Cơ sở yêu thích</div>
        </div>
        <div className="d-flex gap-3 align-items-center py-2 px-3">
          <BsClockHistory />
          <div className="px-2">Lịch sử khám</div>
        </div>
      </div>
    </div>
  );
}

export default Account;
