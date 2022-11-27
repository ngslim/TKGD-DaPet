import React, { useState } from "react";
// import PropTypes from "prop-types";
import DoneOrder from "../DoneOrder/DoneOrder";
import OrderControl from "../OrderControl/OrderControl";

function OrderFlow() {
  // const { order } = props;
  const [status, setStatus] = useState(false);

  const handleOnclick = () => {
    setStatus(true);
  };

  if (!status) {
    return <OrderControl onClick={handleOnclick} />;
  }

  return <DoneOrder />;
}

export default OrderFlow;
