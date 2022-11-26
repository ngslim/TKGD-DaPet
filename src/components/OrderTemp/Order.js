import classes from "./Order.module.css";
import SideBar from "../SideBar/SideBar";
import MedicalCard from "../Card/MedicalCard/MedicalCard";
import Pagination from "../Pagination/Pagination";

const Order = () => {
  return (
    <div>
      <SideBar />;
      <section className={classes["home"]}>
        <div className={classes["text"]}>PET CARE</div>
        <div className={classes["content"]}>
          <MedicalCard />
          <Pagination />
        </div>
      </section>
    </div>
  );
};

export default Order;
