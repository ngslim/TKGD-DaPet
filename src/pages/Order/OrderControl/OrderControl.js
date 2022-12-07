import classes from "./OrderControl.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import OwnerInfo from "./OwnerInfo/OwnerInfo";
import PetInfo from "./PetInfo/PetInfo";

function OrderControl(props) {
  const navigate = useNavigate();

  const gotoOrderHandler = () => {
    navigate("/order");
  };

  return (
    <div className={classes["container-order-control"]}>
      <div className={`${classes["order-info"]} rounded`}>
        <div className="d-flex gap-3 mb-2 align-items-center">
          <div className="fs-4 fw-bolder">Bé Mèo Bánh Bao Cần Điều Trị!!!</div>
          <button className={`${classes["btn-status"]} btn text-white fw-bold`}>
            Chưa được nhận
          </button>
        </div>

        <OwnerInfo dataUser={props.dataUser} />
        <PetInfo dataPet={props.dataPet} />

        <div className="d-flex justify-content-end gap-4 mt-2">
          <button
            className={`${classes["btn-confirm"]} btn btn-secondary`}
            onClick={props.onClick}
          >
            Nhận đơn
          </button>
          <button
            className={`${classes["btn-confirm"]} btn btn-secondary`}
            onClick={gotoOrderHandler}
          >
            Huỷ đơn
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderControl;
