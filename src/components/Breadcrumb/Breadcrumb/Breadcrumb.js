// import classes from "./Breadcrumb.module.css";
import React from "react";
import BreadcrumbItem from "../BreadcrumbItem/BreadcrumbItem";

const Breadcrumb = (props) => {
  const { dataBread, role } = props;

  return (
    <div className="d-flex mt-1">
      {dataBread.map((item, index) => {
        return index === 0 ? (
          <BreadcrumbItem key={index} title={item.title} role={role} />
        ) : (
          <React.Fragment key={index}>
            <span className={`py-2 px-1`}>&#62;</span>
            <BreadcrumbItem
              title={item.title}
              current={item.current}
              role={role}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
