import classes from "./ClinicAround.module.css";
import BookCard from "../../../../components/Card/BookCard/BookCard";
import { Space } from "antd";

const ClinicAround = ({ onClickClinic }) => {
  return (
    <div className={`${classes["container-clinic-around"]} rounded mt-4 pb-3`}>
      <Space direction="horizontal" className={classes["head-view-more"]}>
        <div className="p-3 text-white fs-5 fw-semibold">
          Phòng khám quanh bạn
        </div>
        <div className={classes["view-more"]}>View more</div>
      </Space>
      <div
        className={`${classes["grid-clinic"]} px-4 row justify-content-around`}
      >
        <BookCard
          name="Phòng khám Pet Joy"
          text="Bệnh viện thú y với trang thiết bị hiện đại, cấp cứu 24/24 với kỹ thuật liên tục cập nhật."
          onClick={onClickClinic}
        />
        <BookCard
          name="Phòng khám Pet Farm"
          text="Phòng khám sạch sẽ, dịch vụ tốt, bác sĩ tận tâm."
          onClick={onClickClinic}
        />
        <BookCard
          name="Phòng khám Family Bean"
          text="Bệnh viện thú y Family Bean chuyên phẫu thuật, điều trị và dịch vụ tại nhà đi kèm
           (bao gồm: chích ngừa, tẩy giun, triệt sản,...)."
          onClick={onClickClinic}
        />
      </div>
    </div>
  );
};

export default ClinicAround;
