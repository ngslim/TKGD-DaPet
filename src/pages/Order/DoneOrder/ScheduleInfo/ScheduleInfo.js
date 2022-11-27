import classes from "./ScheduleInfo.module.css";

const ScheduleInfo = () => {
  return (
    <div
      className={`${classes["schedule-info"]} py-2 px-3 text-white rounded d-flex flex-column gap-2`}
    >
      <div className="d-flex gap-3 align-items-center">
        <div className="fs-4 fw-bolder">Lịch trình vừa nhận</div>
        <button className="btn btn-light fw-bold">16:00 13/11/2022</button>
      </div>
      <div className="fw-light d-flex gap-5">
        <div className="d-flex gap-3">
          Tên thú: <b className="fw-bold">Bánh bao</b>
        </div>
        <div className="d-flex gap-3">
          Loại thú: <b className="fw-bold">Mèo</b>
        </div>
      </div>
      <div className="fw-light d-flex gap-3">
        Tên chủ: <b className="fw-bold">Nguyễn Văn A</b>
      </div>
      <div className="fw-light d-flex gap-3">
        SĐT: <b className="fw-bold">0123456789</b>
      </div>
      <div className="fw-light d-flex gap-3">
        Địa chỉ:{" "}
        <b className="fw-bold">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </b>
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

export default ScheduleInfo;
