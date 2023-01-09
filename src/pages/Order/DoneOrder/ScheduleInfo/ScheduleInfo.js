import classes from "./ScheduleInfo.module.css";

const ScheduleInfo = ({ dataSchedule }) => {
  console.log(dataSchedule);
  return (
    <div
      className={`${classes["schedule-info"]} py-2 px-3 text-white rounded d-flex flex-column gap-2`}
    >
      <div className="d-flex gap-3 align-items-center">
        <div className="fs-4 fw-bolder">Lịch trình vừa nhận</div>
        <button className="btn btn-light fw-bold">
          {dataSchedule.clinic.timeline +
            " vào ngày " +
            dataSchedule.clinic.date}
        </button>
      </div>
      <div className="fw-light d-flex gap-5">
        <div className="d-flex gap-3">
          Tên thú: <b className="fw-bold">{dataSchedule.name}</b>
        </div>
        <div className="d-flex gap-3">
          Loại thú: <b className="fw-bold">{dataSchedule.type}</b>
        </div>
      </div>
      <div className="fw-light d-flex gap-3">
        Tên chủ: <b className="fw-bold">{dataSchedule.owner}</b>
      </div>
      <div className="fw-light d-flex gap-3">
        SĐT: <b className="fw-bold">{dataSchedule.phone}</b>
      </div>

      <div>
        Triệu chứng:{" "}
        <span className="fw-bold">
          {dataSchedule.description.reduce(
            (result, current) => result.value + ", " + current.value
          )}
        </span>
      </div>
      <div>
        <div>Chú thích</div>
        <div className="fw-bold">{dataSchedule.comment}</div>
      </div>
    </div>
  );
};

export default ScheduleInfo;
