import React, { useState } from "react";
// import PropTypes from "prop-types";
import DoneOrder from "../DoneOrder/DoneOrder";
import OrderControl from "../OrderControl/OrderControl";

const dataUser = {
  name: "Scalar Witch",
  telephone: "0373273575",
  address: "227 Nguyen Van Cu, Ward 4, District 5, Ho Chi Minh City",
  email: "19120260@student.hcmus.edu.vn",
  date: "2022/12/07",
  time: "14:00",
};

const dataPet = {
  name: "Banh bao",
  typePet: "Meo",
  gender: "Nam",
  description: [
    { id: 1, value: "Nôn mửa", label: "Non mua" },
    { id: 2, value: "Tiêu chảy", label: "Tieu chay" },
  ],
  comment: "Tình trạng nguy cấp!!!!",
};

function OrderFlow() {
  // const { order } = props;
  const [status, setStatus] = useState(false);

  const handleOnclick = () => {
    setStatus(true);
  };

  if (!status) {
    return (
      <OrderControl
        dataUser={dataUser}
        dataPet={dataPet}
        onClick={handleOnclick}
      />
    );
  }

  return <DoneOrder dataPet={dataPet} dataUser={dataUser} />;
}

export default OrderFlow;
