import classes from "./Header.module.css";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import HeaderLogout from "./StatusHeader/HeaderLogout/HeaderLogout";
import HeaderLogin from "./StatusHeader/HeaderLogin/HeaderLogin";
import { useNavigate } from "react-router-dom";

function Header({ role }) {
  const [status, setStatus] = useState(true);
  const navigate = useNavigate();

  const changeStatusHandler = () => {
    setStatus((prev) => !prev);
  };

  const gotoHomePageHandler = () => {
    navigate("/");
  };

  const gotoPageNotFoundHandler = () => {
    navigate("/page-not-found");
  };

  console.log("Header", changeStatusHandler);

  return (
    <div
      className={`d-flex fs-5 text-center align-items-center ${classes["main-header"]} ${classes[role]}`}
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
      <div
        className={`${classes["item"]} px-3 fw-light`}
        onClick={gotoPageNotFoundHandler}
      >
        Khám bệnh
      </div>
      <div
        className={`${classes["item"]} px-3 fw-light`}
        onClick={gotoPageNotFoundHandler}
      >
        Bài viết
      </div>
      <div
        className={`${classes["search-header"]} border border-0 rounded fs-6 py-2 d-flex align-items-center justify-content-between px-4 me-3 ms-auto`}
      >
        <input
          className={`${classes["input-header"]} border-0`}
          type="text"
          placeholder="Chỗ khám bệnh uy tín"
        />
        <BsSearch color="#A0A0A0" />
      </div>
      {status ? <HeaderLogin /> : <HeaderLogout />}
    </div>
  );
}

export default Header;
