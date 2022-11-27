import classes from "./OrderControl.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import OwnerInfo from "./OwnerInfo/OwnerInfo";
import PetInfo from "./PetInfo/PetInfo";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb/Breadcrumb";

function OrderControl(props) {
  const navigate = useNavigate();
  const { onClick } = props;

  const handleOnClickOrderList = () => {
    navigate("/order");
  };

  const dataBread = [
    {
      title: "Quản lý đơn khám",
    },
    {
      title: "Thông tin đơn khám",
    },
  ];
  return (
    <div className={classes["container-order-control"]}>
      <Breadcrumb onClick={handleOnClickOrderList} dataBread={dataBread} />

      <div className={`${classes["order-info"]} rounded`}>
        <div className="d-flex gap-3 mb-2 align-items-center">
          <div className="fs-4 fw-bolder">Tiêu đề</div>
          <button className={`${classes["btn-status"]} btn text-white fw-bold`}>
            Chưa được nhận
          </button>
        </div>

        <OwnerInfo />
        <PetInfo />

        <div className="d-flex justify-content-end gap-4 mt-2">
          <button
            className={`${classes["btn-confirm"]} btn btn-secondary`}
            onClick={onClick}
          >
            Nhận đơn
          </button>
          <button className={`${classes["btn-confirm"]} btn btn-secondary`}>
            Huỷ đơn
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderControl;
