import { useNavigate } from "react-router-dom";
import classes from "./MedicalCard.module.css";
import MedicalCardItem from "./MedicalCardItem/MedicalCardItem";

const dataOrderList = [
  {
    typePet: "Mèo",
    name: "Pet name 1",
    content: "Aenean lectus. Pellentesque eget nunc.",
    date: "2022/12/07",
    time: "14:00",
    description: [
      { id: 1, value: "Nôn mửa", label: "Non mua" },
      { id: 2, value: "Tiêu chảy", label: "Tieu chay" },
    ],
  },
  {
    typePet: "Chó",
    name: "Pet name 2",
    content:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    date: "2022/12/07",
    time: "14:00",
    description: [
      { id: 1, value: "Tiếng khò khè", label: "Tieng kho khe" },
      { id: 2, value: "Rụng lông", label: "Rung long" },
    ],
  },
  {
    typePet: "Chim",
    name: "Pet name 3",
    content: "Cras non velit nec nisi vulputate nonummy.",
    date: "2022/12/07",
    time: "14:00",
    description: [
      { id: 1, value: "Hạ thân nhiệt", label: "Ha than nhiet" },
      { id: 2, value: "Thở khó khăn", label: "Tho kho khan" },
    ],
  },
  {
    typePet: "Cá",
    name: "Pet name 4",
    content:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    date: "2022/12/07",
    time: "14:00",
    description: [
      { id: 1, value: "Chảy máu", label: "Chay mau" },
      { id: 2, value: "Da nhăn nheo", label: "Da nhan nheo" },
    ],
  },
];

const MedicalCard = () => {
  const navigate = useNavigate();

  const gotoOrderDetailHandler = () => {
    navigate("/order/id");
  };

  return (
    <section className={classes["container"]}>
      {dataOrderList.map((item, index) => {
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
