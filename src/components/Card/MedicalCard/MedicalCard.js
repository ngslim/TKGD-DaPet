import { useNavigate } from "react-router-dom";
import classes from "./MedicalCard.module.css";
import MedicalCardItem from "./MedicalCardItem/MedicalCardItem";

const dataOrderList = [
  {
    typePet: "Mèo",
    name: "Bánh Bao Cần Điều Trị Gấp",
    content: "Nôn mửa, tiêu chảy, bụng phình to bất thường, biếng ăn.",
    date: "2022/12/07",
    time: "14:00",
    description: [
      { id: 1, value: "Nôn mửa", label: "Non mua" },
      { id: 2, value: "Tiêu chảy", label: "Tieu chay" },
    ],
  },
  {
    typePet: "Chó",
    name: "Lulu Hay Khò Khè",
    content:
      "Bé bị rụng lông, hay khò khè",
    date: "2022/12/07",
    time: "14:00",
    description: [
      { id: 1, value: "Tiếng khò khè", label: "Tieng kho khe" },
      { id: 2, value: "Rụng lông", label: "Rung long" },
    ],
  },
  {
    typePet: "Chim",
    name: "Chim Vàng Bị Hạ Thân Nhiệt",
    content: "Con Vàng của tôi cảm giác thở rất khó khăn, khi chạm vào thì cảm giác lạnh hơn mọi ngày",
    date: "2022/12/07",
    time: "14:00",
    description: [
      { id: 1, value: "Hạ thân nhiệt", label: "Ha than nhiet" },
      { id: 2, value: "Thở khó khăn", label: "Tho kho khan" },
    ],
  },
  {
    typePet: "Cá",
    name: "Nemo Cần Tìm Sự Giúp Đỡ",
    content:
      "Da cá nhăn và có những tia máu lộ rõ ra ngoài.",
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
