import classes from "./DoneOrder.module.css";
import React from "react";
import ScheduleInfo from "./ScheduleInfo/ScheduleInfo";
import CalendarOrder from "./CalendarOrder/CalendarOrder";
// import PropTypes from "prop-types";

function DoneOrder({ dataPet, dataUser }) {
  return (
    <div className={classes["container-done-order"]}>
      <div className={`${classes["done-order"]} rounded`}>
        <ScheduleInfo dataPet={dataPet} dataUser={dataUser} />

        <CalendarOrder />
      </div>
    </div>
  );
}

export default DoneOrder;
