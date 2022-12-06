// import classes from "./Breadcrumb.module.css";
import React from "react";
import BreadcrumbItem from "../BreadcrumbItem/BreadcrumbItem";

const Breadcrumb = (props) => {
  const { dataBread, role, onClick } = props;

  return (
    <div className="d-flex">
      {dataBread.map((item, index) => {
        return index === 0 ? (
          <BreadcrumbItem
            key={index}
            title={item.title}
            index={index}
            role={role}
            onClick={onClick}
          />
        ) : (
          <React.Fragment key={index}>
            <span className={`py-2 px-1`}>&#62;</span>
            <BreadcrumbItem
              title={item.title}
              index={index}
              current={item.current}
              role={role}
              onClick={onClick}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
