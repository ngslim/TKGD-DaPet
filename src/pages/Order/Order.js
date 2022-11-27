import classes from "./Order.module.css";
import SideBar from "../../components/SideBar/SideBar";
import MedicalCard from "../../components/Card/MedicalCard/MedicalCard";
import Pagination from "../../components/Pagination/Pagination";
import Header from "../../components/Header/Header";

import OrderFlow from "./OrderFlow/OrderFlow";

import { useParams } from "react-router-dom";

const Order = () => {
  const { id } = useParams();
  return (
    <div className={classes["page-order"]}>
      <Header />
      <SideBar />
      <main className={classes["main-content"]}>
        {id ? (
          <OrderFlow />
        ) : (
          <section className={classes["home"]}>
            <div className={classes["text"]}>PET CARE</div>
            <div className={classes["content"]}>
              <MedicalCard />
              <Pagination />
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Order;
