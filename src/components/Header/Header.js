import classes from "./Header.module.css";
import { BsSearch } from "react-icons/bs";
import HeaderLogout from "./StatusHeader/HeaderLogout/HeaderLogout";
import HeaderLogin from "./StatusHeader/HeaderLogin/HeaderLogin";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "../../context/authentication";

function Header() {
  const authState = useAuthState();
  const navigate = useNavigate();

  const gotoHomePageHandler = () => {
    navigate("/");
  };

  const gotoClinicPageHandler = () => {
    if (!authState.state) {
      alert("Bạn phải đăng nhập để dùng tính năng này");
    } else {
      navigate("/order");
    }
  };

  const gotoPetPageHandler = () => {
    if (!authState.state) {
      alert("Bạn phải đăng nhập để dùng tính năng này");
    } else {
      navigate("/pet");
    }
  };

  return (
    <div
      className={`d-flex fs-5 text-center align-items-center ${classes["main-header"]}`}
    >
      <div
        className={`${classes["item"]} fw-bold fs-4 px-4`}
        onClick={gotoHomePageHandler}
      >
        DaPet
      </div>
      <div
        className={`${classes["item"]} px-3 fw-light`}
        onClick={gotoHomePageHandler}
      >
        Trang chủ
      </div>
      {authState.role === "doctor" && (
        <div
          className={`${classes["item"]} px-3 fw-light`}
          onClick={gotoClinicPageHandler}
        >
          Phòng khám
        </div>
      )}
      {!authState.state && authState.role !== "doctor" && (
        <div
          className={`${classes["item"]} px-3 fw-light`}
          onClick={gotoClinicPageHandler}
        >
          Phòng khám
        </div>
      )}
      <div
        className={`${classes["item"]} px-3 fw-light`}
        onClick={gotoPetPageHandler}
      >
        Thú cưng
      </div>
      <div
        className={`${classes["search-header"]} border border-0 rounded fs-6 py-2 d-flex align-items-center justify-content-between px-4 me-3 ms-5`}
      >
        <input
          className={`${classes["input-header"]} border-0`}
          type="text"
          placeholder="Chỗ khám bệnh uy tín"
        />
        <BsSearch color="#A0A0A0" />
      </div>
      {authState.state ? <HeaderLogin /> : <HeaderLogout />}
    </div>
  );
}

export default Header;
