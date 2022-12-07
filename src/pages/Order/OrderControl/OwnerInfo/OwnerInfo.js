import { useNavigate } from "react-router-dom";
import classes from "./OwnerInfo.module.css";

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
      <div className="fw-light">
        SĐT: <b className="fw-bold">{dataUser.telephone}</b>
      </div>
      <div className="fw-light">
        Địa chỉ: <b className="fw-bold">{dataUser.address}</b>
      </div>
      <div className="fw-light">
        E-mail: <b className="fw-bold">{dataUser.email}</b>
      </div>
      <div className="fw-light">
        Thời gian đặt lịch:{" "}
        <b className="fw-bold">{dataUser.date + " at " + dataUser.time}</b>
      </div>
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
