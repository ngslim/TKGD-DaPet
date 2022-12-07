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
        name="Bánh bao"
        text="Mèo Anh Lông Ngắn, 5kg, Đực, Hay bệnh vặt, Đã triệt sản."
        onClick={gotoPageNotFound}
      />
      <PetItem
        name="Sủi cảo"
        text="Mèo mướp, 3kg, Đực, Đã từng bị kí sinh trùng máu, Chưa triệt sản.."
        onClick={gotoPageNotFound}
      />
    </div>
  );
};

export default PetList;
