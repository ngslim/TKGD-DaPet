import classes from "./Home.module.css";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Whyus from "../../components/Whyus/Whyus";
import SwiperClinic from "../../components/SwiperCustom/SwiperClinic/SwiperClinic";
import SwiperEvaluation from "../../components/SwiperCustom/SwiperEvaluation/SwiperEvaluation";
import Gallery from "../../components/Gallery/Gallery";
import GoogleMaps from "../../components/GoogleMaps/GoogleMaps";
import Footer from "../../components/Footer/Footer";

const dataClinic = [
  {
    title: "Birthday Parties",
    image: "./images/event-birthday.jpg",
    address: "$189",
    description:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    feature: ["feature 1", "feature 2", "feature 3"],
    contact: "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Birthday Parties",
    image: "./images/event-custom.jpg",
    address: "$189",
    description:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",

    feature: ["feature 1", "feature 2", "feature 3"],
    contact: "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Birthday Parties",
    image: "./images/event-private.jpg",
    address: "$189",
    description:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    feature: ["feature 1", "feature 2", "feature 3"],
    contact: "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const dataEvaluation = [
  {
    comment:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    name: "Saul Goodman",
    image: "./images/testimonials/testimonials-1.jpg",
    position: "Ceo Founder",
  },
  {
    comment:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    name: "Saul Goodman",
    image: "./images/testimonials/testimonials-2.jpg",
    position: "CEO",
  },
  {
    comment:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",

    name: "Saul Goodman",
    image: "./images/testimonials/testimonials-3.jpg",
    position: "Teacher",
  },
  {
    comment: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    name: "Saul Goodman",
    image: "./images/testimonials/testimonials-4.jpg",
    position: "Dentist",
  },
  {
    comment:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    name: "Saul Goodman",
    image: "./images/testimonials/testimonials-5.jpg",
    position: "Ceo Founder",
  },
];

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
