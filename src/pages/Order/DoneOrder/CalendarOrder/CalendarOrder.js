import CalendarDay from "./CalendarDay/CalendarDay";
import classes from "./CalendarOrder.module.css";

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
