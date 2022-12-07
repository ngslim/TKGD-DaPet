import classes from "./InputBook.module.css";
import React from "react";

const InputBook = React.forwardRef(
  ({ label, small, medium, children }, ref) => {
    return (
      <div className="mt-3">
        <div className="fs-5">{label}</div>
        <input
          className={`${classes["field-input"]} ${classes[small]} ${classes[medium]} border-0 rounded mt-1 px-3 fs-5`}
          type="text"
          placeholder=""
          ref={ref}
        />
        {children}
      </div>
    );
  }
);

export default InputBook;
