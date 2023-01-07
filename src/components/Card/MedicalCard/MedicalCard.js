import { useNavigate } from "react-router-dom";
import classes from "./MedicalCard.module.css";
import MedicalCardItem from "./MedicalCardItem/MedicalCardItem";
import { medicalApp } from "../../../mock/medical-application/medical-application";

// const dataOrderList = [
//   {
//     typePet: "Mèo",
//     name: "Tiêu đề",
//     content: "Nôn mửa, tiêu chảy, bụng phình to bất thường, biếng ăn.",
//     date: "2022/12/07",
//     time: "14:00",
//     description: [
//       { id: 1, value: "Nôn mửa", label: "Non mua" },
//       { id: 2, value: "Tiêu chảy", label: "Tieu chay" },
//     ],
//   },
//   {
//     typePet: "Chó",
//     name: "Tiêu đề",
//     content:
//       "Bé bị rụng lông, hay khò khè",
//     date: "2022/12/07",
//     time: "14:00",
//     description: [
//       { id: 1, value: "Tiếng khò khè", label: "Tieng kho khe" },
//       { id: 2, value: "Rụng lông", label: "Rung long" },
//     ],
//   },
//   {
//     typePet: "Chim",
//     name: "Tiêu đề",
//     content: "Con Vàng của tôi cảm giác thở rất khó khăn, khi chạm vào thì cảm giác lạnh hơn mọi ngày",
//     date: "2022/12/07",
//     time: "14:00",
//     description: [
//       { id: 1, value: "Hạ thân nhiệt", label: "Ha than nhiet" },
//       { id: 2, value: "Thở khó khăn", label: "Tho kho khan" },
//     ],
//   },
//   {
//     typePet: "Cá",
//     name: "Tiêu đề",
//     content:
//       "Da cá nhăn và có những tia máu lộ rõ ra ngoài.",
//     date: "2022/12/07",
//     time: "14:00",
//     description: [
//       { id: 1, value: "Chảy máu", label: "Chay mau" },
//       { id: 2, value: "Da nhăn nheo", label: "Da nhan nheo" },
//     ],
//   },
// ];

const MedicalCard = () => {
  const navigate = useNavigate();

  const gotoOrderDetailHandler = (value) => {
    navigate(`/order/${value}`);
  };

  return (
    <section className={classes["container"]}>
      {medicalApp.map((item, index) => {
        return (
          <MedicalCardItem
            key={index}
            item={item}
            onClick={gotoOrderDetailHandler}
          />
        );
      })}
    </section>
  );
};

export default MedicalCard;
