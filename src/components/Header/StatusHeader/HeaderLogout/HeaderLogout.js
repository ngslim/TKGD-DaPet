import classes from "./HeaderLogout.module.css";

const HeaderLogout = () => {
  return (
    <div className="d-flex px-3 align-items-center">
      <button
        className={`${classes["logout-status-header"]} rounded fs-5 text-white`}
      >
        ĐĂNG NHẬP
      </button>
    </div>
  );
};

export default HeaderLogout;
