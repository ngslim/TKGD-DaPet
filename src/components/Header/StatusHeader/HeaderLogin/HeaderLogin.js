import React from "react";
import classes from "./HeaderLogin.module.css";

function HeaderLogin() {
  return (
    <div className="d-flex px-3 align-items-center ms-auto">
      <span className={classes["login-header"]}></span>
      <div className="ms-2 flex-grow-1">Username</div>
    </div>
  );
}

export default HeaderLogin;
