import classes from "./ScheduleInfo.module.css";

const ScheduleInfo = ({ dataPet, dataUser }) => {
  return (
    <div
      className={`${classes["schedule-info"]} py-2 px-3 text-white rounded d-flex flex-column gap-2`}
    >
      <div className="d-flex gap-3 align-items-center">
        <div className="fs-4 fw-bolder">Lịch trình vừa nhận</div>
        <button className="btn btn-light fw-bold">
          {dataUser.time + " " + dataUser.date}
        </button>
      </div>
      <div className="fw-light d-flex gap-5">
        <div className="d-flex gap-3">
          Tên thú: <b className="fw-bold">{dataPet.name}</b>
        </div>
        <div className="d-flex gap-3">
          Loại thú: <b className="fw-bold">{dataPet.typePet}</b>
        </div>
      </div>
      <div className="fw-light d-flex gap-3">
        Tên chủ: <b className="fw-bold">{dataUser.name}</b>
      </div>
      <div className="fw-light d-flex gap-3">
        SĐT: <b className="fw-bold">{dataUser.telephone}</b>
      </div>
      <div className="fw-light d-flex gap-3">
        Địa chỉ: <b className="fw-bold">{dataUser.address}</b>
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

export default ScheduleInfo;
