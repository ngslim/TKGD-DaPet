import { Space } from "antd";
import classes from "./PetItem.module.css";

const PetItem = ({ name, description, image, onClick }) => {
  const getSymptom = () => {
    if (Array.isArray(description)) {
      const length = description.length;
      if (length === 1) {
        return description[0].value;
      }
      return description.reduce((result, current) => {
        return result.value + ", " + current.value;
      });
    }
  };
  console.log("des", description);
  return (
    <div className={classes["pet-item"]}>
      <div
        className={`${classes["img-pet-card"]} rounded-top`}
        onClick={onClick}
      >
        <img src={image} className="img-fluid" alt="" />
      </div>
      <div
        className={`${classes["body-pet-card"]} px-3 gap-3 d-flex rounded-bottom justify-content-around align-items-center`}
      >
        <div className={`${classes["description-item"]} p-2`} onClick={onClick}>
          <div className="text-white fw-semibold">{name}</div>
          <div className="text-white">{getSymptom()}</div>
        </div>
        <Space direction="horizontal" style={{ float: "right" }}>
          <button
            className={`${classes["btn-pet-card"]} btn btn-light py-2 fw-bold`}
            onClick={onClick}
          >
            Theo dõi
          </button>
          <button
            className={`${classes["btn-pet-card"]} btn btn-light py-2 fw-bold`}
            onClick={onClick}
          >
            Lịch sử
          </button>
        </Space>
      </div>
    </div>
  );
};

export default PetItem;
