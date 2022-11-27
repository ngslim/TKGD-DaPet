import PetItem from "./PetItem/PetItem";
import classes from "./PetList.module.css";
import { useNavigate } from "react-router-dom";

const PetList = () => {
  const navigate = useNavigate();

  const gotoPageNotFound = () => {
    navigate("/page-not-found");
  };

  return (
    <div className={classes["grid-pet-list"]}>
      <PetItem
        name="Tên thú cưng"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa."
        onClick={gotoPageNotFound}
      />
      <PetItem
        name="Tên thú cưng"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa."
        onClick={gotoPageNotFound}
      />
    </div>
  );
};

export default PetList;
