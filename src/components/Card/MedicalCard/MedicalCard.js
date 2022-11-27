import { useNavigate } from "react-router-dom";
import classes from "./MedicalCard.module.css";
import MedicalCardItem from "./MedicalCardItem/MedicalCardItem";

const MedicalCard = () => {
  const orderList = [
    {
      name: "Mèo",
      title: "Tiêu đề",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      date: "16:00 13/11/2022",
    },
    {
      name: "Mèo",
      title: "Tiêu đề",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      date: "16:00 13/11/2022",
    },
    {
      name: "Mèo",
      title: "Tiêu đề",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      date: "16:00 13/11/2022",
    },
    {
      name: "Mèo",
      title: "Tiêu đề",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      date: "16:00 13/11/2022",
    },
    {
      name: "Mèo",
      title: "Tiêu đề",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      date: "16:00 13/11/2022",
    },
    {
      name: "Mèo",
      title: "Tiêu đề",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      date: "16:00 13/11/2022",
    },
  ];

  const navigate = useNavigate();

  const gotoOrderDetailHandler = () => {
    navigate("/order/id");
  };

  return (
    <section className={classes["container"]}>
      {orderList.map((item, index) => {
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
