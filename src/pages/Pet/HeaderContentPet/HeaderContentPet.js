import classes from "./HeaderContentPet.module.css";

const HeaderContentPet = ({ title, labelButton, onClickButton }) => {
  return (
    <div
      className={`${classes["title-head"]} d-flex justify-content-between rounded-top align-items-center`}
    >
      <div className="px-4 py-1 fs-4 text-white">{title}</div>
      <button
        onClick={onClickButton}
        className="btn btn-light border-0 fw-bold fs-5 px-4 mx-3"
      >
        {labelButton}
      </button>
    </div>
  );
};

export default HeaderContentPet;
