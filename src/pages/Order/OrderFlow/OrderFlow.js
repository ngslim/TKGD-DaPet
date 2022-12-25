import React, { useState } from "react";
// import PropTypes from "prop-types";
import DoneOrder from "../DoneOrder/DoneOrder";
import OrderControl from "../OrderControl/OrderControl";
import { dataPet, dataUser } from "../../../mock/order-data";

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
