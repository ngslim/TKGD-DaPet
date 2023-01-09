import React from "react";
import { useAuthState } from "../../../../context/authentication";
import classes from "./HeaderLogin.module.css";

function HeaderLogin() {
  const authState = useAuthState();
  return (
    <div
      className={`${classes["hover"]} d-flex px-3 align-items-center ms-auto`}
    >
      <span
        className={classes["login-header"]}
        onClick={authState.handler}
      ></span>
      <div className="ms-2 flex-grow-1" onClick={authState.onChangeRole}>
        {authState.role === "doctor" ? (
          <span>Doctor</span>
        ) : (
          <span>username</span>
        )}
      </div>
    </div>
  );
}

export default HeaderLogin;
