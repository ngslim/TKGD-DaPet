import { useAuthState } from "../../../../context/authentication";
import classes from "./HeaderLogout.module.css";

const HeaderLogout = () => {
  const authState = useAuthState();
  return (
    <div className="d-flex px-3 align-items-center ms-auto">
      <button
        className={`${classes["logout-status-header"]} rounded fs-5 text-white`}
        onClick={authState.handler}
      >
        ĐĂNG NHẬP
      </button>
    </div>
  );
};

export default HeaderLogout;
