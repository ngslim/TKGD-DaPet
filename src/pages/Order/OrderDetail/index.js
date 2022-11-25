import React, { useState } from "react";
// import PropTypes from "prop-types";
import Order from "../Order";
import DoneOrder from "../DoneOrder";

function OrderDetail() {
  // const { order } = props;
  const [status, setStatus] = useState(false);

  const handleOnclick = () => {
    setStatus(true);
  };

  if (!status) {
    return <Order onClick={handleOnclick} />;
  }

  return <DoneOrder />;
}

export default OrderDetail;
