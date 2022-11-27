import classes from "./DoneOrder.module.css";
import React from "react";
import ScheduleInfo from "./ScheduleInfo/ScheduleInfo";
import CalendarOrder from "./CalendarOrder/CalendarOrder";
// import PropTypes from "prop-types";

function DoneOrder() {
  return (
    <div className={classes["container-done-order"]}>
      <div className={`${classes["title-schedule"]} py-2 px-1 fw-bold`}>
        <div>Lịch trình</div>
      </div>
      <div className={`${classes["done-order"]} rounded`}>
        <ScheduleInfo />

        <CalendarOrder />
      </div>
    </div>
  );
}

export default DoneOrder;
