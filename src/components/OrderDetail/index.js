import React from "react";

function OrderDetail(props) {
  const { title, name, content, date } = props;
  return (
    <div className="bg-white p-3 rounded">
      <div className="fw-bold">{title}</div>
      <div className="fst-italic fw-light">{name}</div>
      <div className="fw-light">Mô tả bệnh tình:</div>
      <div className="fw-bold">{content}</div>
      <div>
        Thời gian khám: <b>{date}</b>
      </div>
    </div>
  );
}

export default OrderDetail;
