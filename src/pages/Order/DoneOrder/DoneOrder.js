import classes from "./DoneOrder.module.css";
import React from "react";
import ScheduleInfo from "./ScheduleInfo/ScheduleInfo";
import CalendarOrder from "./CalendarOrder/CalendarOrder";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { medicalApp } from "../../../mock/medical-application/medical-application";
// import PropTypes from "prop-types";

function DoneOrder({ dataPet, dataUser }) {
  const [medicalApplication, setMedicalApplication] = useState(null);
  const param = useParams();

  useEffect(() => {
    setMedicalApplication(medicalApp[param.id - 1]);
  }, [medicalApplication, param]);

  return (
    <div className={classes["container-done-order"]}>
      <div className={`${classes["done-order"]} rounded`}>
        {medicalApplication && (
          <ScheduleInfo dataSchedule={medicalApplication} />
        )}

        <CalendarOrder />
      </div>
    </div>
  );
}

export default DoneOrder;
