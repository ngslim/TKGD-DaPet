import ButtonBanner from "../Button/ButtonBanner/ButtonBanner";
import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <section className={`${classes["banner"]} d-flex align-items-center`}>
      <div className="container position-relative text-center text-lg-start">
        <div className="row">
          <div className="col-lg-8">
            <h1>
              Welcome to <span>DaPet</span>
            </h1>
            <h2>Good choice to take care of your pet!</h2>

            <div className={classes["btns"]}>
              <ButtonBanner>Our Service</ButtonBanner>
              <ButtonBanner>Book an Appointment</ButtonBanner>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
