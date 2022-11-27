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
        <div className="fw-bold">Nam</div>
      </div>
      <div>
        <div>Triệu chứng</div>
        <div className="fw-bold">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </div>
      </div>
      <div>
        <div>Chú thích</div>
        <div className="fw-bold">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </div>
      </div>
    </div>
  );
};

export default PetInfo;
