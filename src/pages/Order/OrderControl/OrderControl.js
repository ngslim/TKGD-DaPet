import classes from "./OrderControl.module.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OwnerInfo from "./OwnerInfo/OwnerInfo";
import PetInfo from "./PetInfo/PetInfo";
import { medicalApp } from "../../../mock/medical-application/medical-application";

function OrderControl(props) {
  const [medicalApplication, setMedicalApplication] = useState(null);
  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    setMedicalApplication(medicalApp[param.id - 1]);
  }, [medicalApplication, param]);

  const gotoOrderHandler = () => {
    navigate("/order");
  };

  return (
    <div className={classes["container-order-control"]}>
      <div className={`${classes["order-info"]} rounded`}>
        <div className="d-flex gap-3 mb-2 align-items-center">
          {medicalApplication && (
            <div className="fs-4 fw-bolder">{medicalApplication.name}</div>
          )}
          <button className={`${classes["btn-status"]} btn text-white fw-bold`}>
            Chưa được nhận
          </button>
        </div>

        <OwnerInfo dataUser={medicalApplication} />
        <PetInfo dataPet={medicalApplication} />

        <div className="d-flex justify-content-end gap-4 mt-2">
          <button
            className={`${classes["btn-confirm"]} btn btn-secondary`}
            onClick={gotoOrderHandler}
          >
            Hủy đơn
          </button>
          <button
            className={`${classes["btn-confirm"]} btn btn-secondary`}
            onClick={props.onClick}
          >
            Nhận đơn
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderControl;
