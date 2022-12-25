import classes from "./NotFound.module.css";
import { useNavigate } from "react-router-dom";
import ButtonBook from "../../components/Button/ButtonBook/ButtonBook";

const NotFound = () => {
  const navigate = useNavigate();

  const gotoHomePageHandler = () => {
    navigate("/");
  };

  return (
    <div className={classes["not-found"]}>
      <img
        src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
        alt="not-found"
      />
      <ButtonBook onClick={gotoHomePageHandler}>Go Home</ButtonBook>
    </div>
  );
};
export default NotFound;
