import classes from "./PetItem.module.css";

const PetItem = ({ name, text, onClick }) => {
  return (
    <div className={classes["pet-item"]}>
      <div
        className={`${classes["img-pet-card"]} rounded-top`}
        onClick={onClick}
      ></div>
      <div
        className={`${classes["body-pet-card"]} px-3 gap-3 d-flex rounded-bottom justify-content-around align-items-center`}
      >
        <div
          className={`${classes["description-item"]} p-2 flex-column`}
          onClick={onClick}
        >
          <div className="text-white fw-semibold">{name}</div>
          <div className="text-white">{text}</div>
        </div>
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
      </div>
    </div>
  );
};

export default PetItem;
