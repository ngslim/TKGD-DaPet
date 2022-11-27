import React from "react";
import classes from "./HeaderLogin.module.css";

function HeaderLogin() {
  return (
    <div class="d-flex px-3 align-items-center">
      <span className={classes["login-header"]}></span>
      <div className="ms-2 flex-grow-1">Username</div>
    </div>
  );
}

export default HeaderLogin;
