// import classes from "./Breadcrumb.module.css";
import React from "react";
import BreadcrumbItem from "../BreadcrumbItem/BreadcrumbItem";
// import { useNavigate } from "react-router-dom";

const Breadcrumb = (props) => {
  // const navigate = useNavigate();
  const { dataBread } = props;

  // const handleOnClickOrderList = () => {
  //   navigate("/order");
  // };
  return (
    <div className="d-flex mt-2">
      {dataBread.map((item, index) => {
        return index === 0 ? (
          <BreadcrumbItem title={item.title} key={index} />
        ) : (
          <React.Fragment key={index}>
            <span className={`py-2 px-1`}>&#62;</span>
            <BreadcrumbItem title={item.title} current="current" />
          </React.Fragment>
        );
      })}
      {/* <BreadcrumbItem title="Quản lý đơn khám" />
      <span className={`py-2 px-1`}>&#62;</span>
      <BreadcrumbItem title="Thông tin đơn khám" current="current" /> */}
    </div>
  );
};

export default Breadcrumb;
