import PetItem from "./PetItem/PetItem";
import classes from "./PetList.module.css";
import { useNavigate } from "react-router-dom";
import { dataPetList } from "../../../mock/pet-data";

const PetList = () => {
  const navigate = useNavigate();

  const gotoPageNotFound = () => {
    navigate("/page-not-found");
  };

  return (
    <div className={classes["grid-pet-list"]}>
      {dataPetList.map((item, index) => {
        return (
          <PetItem
            key={index}
            name={item.name}
            text={item.habit}
            image={item.image}
            onClick={gotoPageNotFound}
          />
        );
      })}
    </div>
  );
};

export default PetList;
