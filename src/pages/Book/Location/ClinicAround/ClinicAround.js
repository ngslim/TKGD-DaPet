import classes from "./ClinicAround.module.css";
import BookCard from "../../../../components/Card/BookCard/BookCard";
import { useNavigate } from "react-router-dom";

const ClinicAround = () => {
  const navigate = useNavigate();

  const gotoPageNotFound = () => {
    navigate("/page-not-found");
  };

  return (
    <div className={`${classes["container-clinic-around"]} rounded mt-4 pb-3`}>
      <div className="p-3 text-white fs-5 fw-semibold">
        Phòng khám quanh bạn
      </div>
      <div
        className={`${classes["grid-clinic"]} px-4 row justify-content-around`}
      >
        <BookCard
          name="Phòng khám A"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit. Aenean commodo ligula eget dolor. Aenean massa."
          onClick={gotoPageNotFound}
        />
        <BookCard
          name="Phòng khám A"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit. Aenean commodo ligula eget dolor. Aenean massa."
          onClick={gotoPageNotFound}
        />
        <BookCard
          name="Phòng khám A"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit. Aenean commodo ligula eget dolor. Aenean massa."
          onClick={gotoPageNotFound}
        />
      </div>
    </div>
  );
};

export default ClinicAround;
