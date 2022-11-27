import { useState } from "react";
import CheckedOrder from "../CheckedOrder/CheckedOrder";
import classes from "./CalendarDay.module.css";

const CalendarDay = ({ weekday, day, checked }) => {
  //   const [checked, setChecked] = useState(false);

  //   const checkedOrderHandler = () => {
  //     setChecked((prev) => !prev);
  //   };

  //   console.log("Calendar: ", checkedOrderHandler);
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
