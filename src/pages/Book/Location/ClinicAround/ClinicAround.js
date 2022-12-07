import classes from "./ClinicAround.module.css";
import BookCard from "../../../../components/Card/BookCard/BookCard";
import { Space } from "antd";

const dataClinic = [
  {
    name: "Phòng Khám Pet Joy",
    text: "Bệnh viện thú y với trang thiết bị hiện đại, cấp cứu 24/24.",
    image: "/images/clinic/clinic-1.jpg",
  },
  {
    name: "Phòng Khám Family Bean",
    text: "Bệnh viện thú y chuyên phẫu thuật, điều trị và dịch vụ tại nhà đi kèm (bao gồm chích ngừa, triệt sản).",
    image: "/images/clinic/clinic-2.jpg",
  },
  {
    name: "Clinic Pet Farm",
    text: "Phòng khám sạch sẽ, dịch vụ tốt, giá hợp lí.",
    image: "/images/clinic/clinic-3.jpg",
  },
];

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
        {dataClinic.map((item, index) => {
          return (
            <BookCard
              key={index}
              name={item.name}
              text={item.text}
              image={item.image}
              onClick={onClickClinic}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ClinicAround;
