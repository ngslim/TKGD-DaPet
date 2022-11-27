import classes from "./Header.module.css";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import HeaderLogout from "./StatusHeader/HeaderLogout/HeaderLogout";
import HeaderLogin from "./StatusHeader/HeaderLogin/HeaderLogin";

function Header() {
  const [status, setStatus] = useState(true);

  const changeStatusHandler = () => {
    setStatus((prev) => !prev);
  };
  console.log("Header", changeStatusHandler);

  return (
    <div
      className={`d-flex fs-5 text-center align-items-center ${classes["main-header"]}`}
    >
      <div className="fw-bold fs-4 px-4" style={{ fontFamily: "Oswald" }}>
        DaPet
      </div>
      <div className="px-3 fw-light">Trang chủ</div>
      <div className="px-3 fw-light">Khám bệnh</div>
      <div className="px-3 fw-light">Bài viết</div>
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
