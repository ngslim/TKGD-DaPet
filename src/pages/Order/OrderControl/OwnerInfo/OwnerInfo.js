import { useNavigate } from "react-router-dom";
import classes from "./OwnerInfo.module.css";
import React from "react";

const OwnerInfo = ({ dataUser }) => {
  const navigate = useNavigate();

  const gotoPageNotFoundHandler = () => {
    navigate("/page-not-found");
  };

  return (
    <div
      className={`${classes["owner-info"]} py-2 px-3 text-white rounded d-flex flex-column gap-3`}
    >
      <div className="py-2 fs-5 fw-bolder">Thông tin liên hệ</div>
      {dataUser && (
        <React.Fragment>
          <div className="fw-light">
            SĐT: <b className="fw-bold">{dataUser.phone}</b>
          </div>
          <div className="fw-light">
            Họ và tên: <b className="fw-bold">{dataUser.owner}</b>
          </div>
          <div className="fw-light">
            Thời gian đặt lịch:{" "}
            <b className="fw-bold">
              {dataUser.clinic.date + " lúc " + dataUser.clinic.timeline}
            </b>
          </div>
        </React.Fragment>
      )}
      <div className="d-flex justify-content-end gap-4 mb-2">
        <button
          className={`${classes["btn-contact"]} btn btn-light`}
          onClick={gotoPageNotFoundHandler}
        >
          Liên hệ
        </button>
      </div>
    </div>
  );
};

export default OwnerInfo;
