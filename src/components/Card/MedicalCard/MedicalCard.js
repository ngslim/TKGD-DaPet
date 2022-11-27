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
  return (
    <section className={classes["container"]}>
      {orderList.map((item, index) => {
        return <MedicalCardItem key={index} item={item} />;
      })}
    </section>
  );
};

export default MedicalCard;
