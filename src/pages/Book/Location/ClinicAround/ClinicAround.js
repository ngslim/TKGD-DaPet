import classes from "./ClinicAround.module.css";
import BookCard from "../../../../components/Card/BookCard/BookCard";
import { Space } from "antd";
import { dataClinics } from "../../../../mock/clinic/clinic";

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
        {dataClinics.map((item, index) => {
          if (index < 4)
            return (
              <BookCard key={item.id} item={item} onClick={onClickClinic} />
            );
          return null;
        })}
      </div>
    </div>
  );
};

export default ClinicAround;
