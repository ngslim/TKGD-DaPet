// import classes from "./PetInfo.module.css";

const PetInfo = () => {
  return (
    <div className="py-2 px-1 rounded d-flex flex-column gap-2 mt-2">
      <div className="fs-5 fw-bolder">Thông tin vật nuôi</div>
      <div>
        <div>Vật nuôi:</div>
        <div className="fw-bold">Mèo</div>
      </div>
      <div>
        <div>Giới tính:</div>
        <div className="fw-bold">Đực</div>
      </div>
      <div>
        <div>Triệu chứng</div>
        <div className="fw-bold">
          Lông rụng, bụng phình to bất thường, biếng ăn.
        </div>
      </div>
      <div>
        <div>Chú thích</div>
        <div className="fw-bold">
          Bé hay uống nước trong chậu cây, không thích ăn đồ ăn nhà làm, chỉ thích ăn lung tung.
        </div>
      </div>
    </div>
  );
};

export default PetInfo;
