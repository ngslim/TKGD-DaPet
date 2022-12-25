// import { useState } from "react";
import CheckedOrder from "../CheckedOrder/CheckedOrder";
import classes from "./CalendarDay.module.css";

const CalendarDay = ({ weekday, day, checked }) => {
  return (
    <div className={classes["day-title"]}>
      <div className={`${classes["day-column"]} p-2`}>
        <div className="fs-5 fw-bold">{day}</div>
        <div>{weekday}</div>
      </div>
      {checked ? <CheckedOrder /> : null}
    </div>
  );
};

export default CalendarDay;
