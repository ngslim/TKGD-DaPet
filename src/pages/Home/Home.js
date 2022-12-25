import classes from "./Home.module.css";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Whyus from "../../components/Whyus/Whyus";
import SwiperClinic from "../../components/SwiperCustom/SwiperClinic/SwiperClinic";
import SwiperEvaluation from "../../components/SwiperCustom/SwiperEvaluation/SwiperEvaluation";
import Gallery from "../../components/Gallery/Gallery";
import GoogleMaps from "../../components/GoogleMaps/GoogleMaps";
import Footer from "../../components/Footer/Footer";
import { dataClinic, dataEvaluation } from "../../mock/home-data";

const Home = () => {
  return (
    <div>
      <Header />
      <main className={classes["main"]}>
        <Banner />
        <Whyus />
        <SwiperClinic data={dataClinic} />
        <SwiperEvaluation data={dataEvaluation} />
        <Gallery />
        <GoogleMaps />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
