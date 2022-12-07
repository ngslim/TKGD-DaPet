import { useNavigate } from "react-router-dom";
import classes from "./OwnerInfo.module.css";

const OwnerInfo = () => {
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
        SĐT: <b className="fw-bold">012 345 67 89</b>
      </div>
      <div className="fw-light">
        Địa chỉ:{" "}
        <b className="fw-bold">
          227 Nguyễn Văn Cừ, P.4, Q.5, Tp. HCM.
        </b>
      </div>
      <div className="fw-light">
        E-mail: <b className="fw-bold">petowner@gmail.com</b>
      </div>
      <div className="fw-light">
        Thời gian đặt lịch: <b className="fw-bold">16:00 13/11/2022</b>
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
