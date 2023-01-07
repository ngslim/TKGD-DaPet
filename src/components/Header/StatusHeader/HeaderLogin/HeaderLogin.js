import React from "react";
import { useAuthState } from "../../../../context/authentication";
import classes from "./HeaderLogin.module.css";

function HeaderLogin() {
  const authState = useAuthState();
  return (
    <div
      className={`${classes["hover"]} d-flex px-3 align-items-center ms-auto`}
      onClick={authState.handler}
    >
      <span className={classes["login-header"]}></span>
      <div className="ms-2 flex-grow-1">Username</div>
    </div>
  );
}

export default HeaderLogin;
