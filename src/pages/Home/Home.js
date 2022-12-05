import classes from "./Home.module.css";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Whyus from "../../components/Whyus/Whyus";
import SwiperClinic from "../../components/SwiperCustom/SwiperClinic/SwiperClinic";
import SwiperEvaluation from "../../components/SwiperCustom/SwiperEvaluation/SwiperEvaluation";
import Gallery from "../../components/Gallery/Gallery";
import GoogleMaps from "../../components/GoogleMaps/GoogleMaps";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const dataClinic = [
    {
      title: "Birthday Parties",
      image: "./images/event-birthday.jpg",
      address: "$189",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      feature: ["feature1", "feature2", "feature3"],
      contact: "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Birthday Parties",
      image: "./images/event-custom.jpg",
      address: "$189",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      feature: ["feature1", "feature2", "feature3"],
      contact: "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Birthday Parties",
      image: "./images/event-private.jpg",
      address: "$189",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      feature: ["feature1", "feature2", "feature3"],
      contact: "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const dataEvaluation = [
    {
      comment:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      name: "Saul Goodman",
      image: "./images/testimonials/testimonials-1.jpg",
      position: "Ceo &amp; Founder",
    },
    {
      comment:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      name: "Saul Goodman",
      image: "./images/testimonials/testimonials-1.jpg",
      position: "Ceo &amp; Founder",
    },
    {
      comment:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      name: "Saul Goodman",
      image: "./images/testimonials/testimonials-1.jpg",
      position: "Ceo &amp; Founder",
    },
    {
      comment:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      name: "Saul Goodman",
      image: "./images/testimonials/testimonials-1.jpg",
      position: "Ceo &amp; Founder",
    },
    {
      comment:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      name: "Saul Goodman",
      image: "./images/testimonials/testimonials-1.jpg",
      position: "Ceo &amp; Founder",
    },
  ];
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
