import classes from "./BreadcrumbOrder.module.css";
import React from "react";
// import { useNavigate } from "react-router-dom";

const BreadcrumbOrder = (props) => {
  // const navigate = useNavigate();
  const { onClick } = props;

  // const handleOnClickOrderList = () => {
  //   navigate("/order");
  // };
  return (
    <div className="d-flex mt-2">
      <div
        className={`${classes["breadcrumb-order"]} py-2 px-1`}
        onClick={onClick}
      >
        Quản lý đơn khám
      </div>
      <span className={`py-2 px-1`}>&#62;</span>
      <div className={`${classes["breadcrumb-current"]} py-2 px-1 fw-bold`}>
        Thông tin đơn khám
      </div>
    </div>
  );
};

export default BreadcrumbOrder;
