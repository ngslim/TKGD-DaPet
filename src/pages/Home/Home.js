import classes from "./Home.module.css";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Whyus from "../../components/Whyus/Whyus";

const Home = () => {
  return (
    <div>
      <Header />
      <main className={classes["main"]}>
        <Banner />
        <Whyus />
      </main>
    </div>
  );
};

export default Home;
