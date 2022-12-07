import classes from "./ClinicAround.module.css";
import BookCard from "../../../../components/Card/BookCard/BookCard";
import { Space } from "antd";

const dataClinic = [
  {
    name: "Clinic A",
    text: "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    image: "/images/clinic/clinic-1.jpg",
  },
  {
    name: "Clinic B",
    text: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    image: "/images/clinic/clinic-2.jpg",
  },
  {
    name: "Clinic C",
    text: "Etiam vel augue. Vestibulum rutrum rutrum neque.",
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
