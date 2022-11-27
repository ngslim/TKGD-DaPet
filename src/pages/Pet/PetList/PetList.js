import PetItem from "./PetItem/PetItem";
import classes from "./PetList.module.css";

const PetList = () => {
  return (
    <div className={classes["grid-pet-list"]}>
      <PetItem
        name="Tên thú cưng"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa."
      />
      <PetItem
        name="Tên thú cưng"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa."
      />
    </div>
  );
};

export default PetList;
