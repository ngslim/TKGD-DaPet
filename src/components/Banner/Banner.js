import { useNavigate } from "react-router-dom";
import ButtonBanner from "../Button/ButtonBanner/ButtonBanner";
import classes from "./Banner.module.css";

const Banner = () => {
  const navigate = useNavigate();

  const gotoBookHandler = () => {
    navigate("/book");
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
              Chào mừng đến với <span>DaPet</span>
            </h1>
            <h2>Giải pháp chăm sóc thú cưng toàn diện nhất!</h2>

            <div className={classes["btns"]}>
              <ButtonBanner onClick={gotoBookHandler}>
                Đặt Lịch Khám Ngay Tại Đây!
              </ButtonBanner>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
