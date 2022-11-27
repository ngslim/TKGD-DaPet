import CalendarDay from "./CalendarDay/CalendarDay";
import classes from "./CalendarOrder.module.css";
import CheckedOrder from "./CheckedOrder/CheckedOrder";

const CalendarOrder = () => {
  return (
    <div className={`${classes["grid-calendar"]} rounded mt-2`}>
      <div
        className={`${classes["month"]} d-flex align-items-center justify-content-center rounded-start`}
      >
        <span className={`${classes["month-text"]} fw-bold text-white`}>
          November
        </span>
      </div>
      {/* <div className={classes["day-title"]}>
        <div className={`${classes["day-column"]} p-2`}>
          <div className="fs-5 fw-bold">13</div>
          <div>Sun</div>
        </div>
        <CheckedOrder />
      </div> */}
      <CalendarDay weekday="Sun" day={13} checked={true} />
      <CalendarDay weekday="Mon" day={14} />
      <CalendarDay weekday="Tue" day={15} />
      <CalendarDay weekday="Wed" day={16} />
      <CalendarDay weekday="Thu" day={17} />
      <CalendarDay weekday="Fri" day={18} />
      <CalendarDay weekday="Sat" day={19} />
      <CalendarDay weekday="Sun" day={20} />
    </div>
  );
};

export default CalendarOrder;
