// import classes from "./PetInfo.module.css";

import React from "react";

const PetInfo = ({ dataPet }) => {
  return (
    <div className="py-2 px-1 rounded d-flex flex-column gap-2 mt-2">
      <div className="fs-5 fw-bolder">Thông tin vật nuôi</div>
      {dataPet && (
        <React.Fragment>
          <div>
            Vật nuôi: <span className="fw-bold">{dataPet.type}</span>
          </div>
          <div>
            Tên: <span className="fw-bold">{dataPet.name}</span>
          </div>
          <div>
            <div>Triệu chứng</div>
            <div className="fw-bold">
              {dataPet.description.reduce(
                (result, current) => result.value + ", " + current.value
              )}
            </div>
          </div>
          <div>
            <div>Chú thích</div>
            <div className="fw-bold">{dataPet.comment}</div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default PetInfo;
