import PetItem from "./PetItem/PetItem";
import classes from "./PetList.module.css";
import { useNavigate } from "react-router-dom";
import { userPets } from "../../../mock/user-pet/user-pet";

const PetList = () => {
  const navigate = useNavigate();

  const gotoPageNotFound = () => {
    navigate("/page-not-found");
  };
  console.log("user pets ", userPets);

  return (
    <div className={classes["grid-pet-list"]}>
      {userPets.map((item, index) => {
        return (
          <PetItem
            key={index}
            name={item.name}
            description={item.description}
            image={item.image}
            onClick={gotoPageNotFound}
          />
        );
      })}
    </div>
  );
};

export default PetList;
