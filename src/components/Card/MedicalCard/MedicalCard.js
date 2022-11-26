import classes from "./MedicalCard.module.css";
import MedicalCardItem from "./MedicalCardItem/MedicalCardItem";

const MedicalCard = () => {
  return (
    <section className={classes["container"]}>
      <MedicalCardItem />
      <MedicalCardItem />
      <MedicalCardItem />
      <MedicalCardItem />
    </section>
  );
};

export default MedicalCard;
