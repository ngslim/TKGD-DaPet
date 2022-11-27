import classes from "./CheckedOrder.module.css";

const CheckedOrder = () => {
  return (
    <div className={`${classes["checked-day"]} p-2`}>
      <div className="fs-5 fw-bold">16:00</div>
      <div>Tiêu đề</div>
    </div>
  );
};

export default CheckedOrder;
