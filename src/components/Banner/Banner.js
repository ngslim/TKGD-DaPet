import { useNavigate } from "react-router-dom";
import ButtonBanner from "../Button/ButtonBanner/ButtonBanner";
import classes from "./Banner.module.css";

const Banner = () => {
  const navigate = useNavigate();

  const gotoBookHandler = () => {
    navigate("/book");
  };

  const gotoPageNotFoundHandler = () => {
    navigate("/page-not-found");
  };

  return (
    <section
      id="banner"
      className={`${classes["banner"]} d-flex align-items-center`}
    >
      <div className="container position-relative text-center text-lg-start">
        <div className="row">
          <div className="col-lg-8">
            <h1>
              Welcome to <span>DaPet</span>
            </h1>
            <h2>Good choice to take care of your pet!</h2>

            <div className={classes["btns"]}>
              <ButtonBanner onClick={gotoPageNotFoundHandler}>
                Our Service
              </ButtonBanner>
              <ButtonBanner onClick={gotoBookHandler}>
                Book an Appointment
              </ButtonBanner>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
