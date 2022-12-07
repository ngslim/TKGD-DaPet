// import classes from "./PetInfo.module.css";

const PetInfo = ({ dataPet }) => {
  return (
    <div className="py-2 px-1 rounded d-flex flex-column gap-2 mt-2">
      <div className="fs-5 fw-bolder">Thông tin vật nuôi</div>
      <div>
        <div>Vật nuôi:</div>
        <div className="fw-bold">{dataPet.typePet}</div>
      </div>
      <div>
        <div>Giới tính:</div>
        <div className="fw-bold">{dataPet.gender}</div>
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
    </div>
  );
};

export default PetInfo;
