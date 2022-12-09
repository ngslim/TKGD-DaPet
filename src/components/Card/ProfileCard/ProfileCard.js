import { useNavigate } from "react-router-dom";
import classes from "./ProfileCard.module.css";
import TechniqueItem from "./TechniqueItem/TechniqueItem";

const ProfileCard = () => {
  const navigate = useNavigate();

  const gotoPageNotFoundHandler = () => {
    navigate("/page-not-found");
  };

  return (
    <section className={classes["main"]}>
      <div className={classes["profile-card"]}>
        <div className={classes["image"]}>
          <img
            src="/images/profile.jpg"
            alt=""
            className={classes["profile-pic"]}
          />
        </div>
        <div className={classes["profile"]}>
          <h3>Dr.</h3>
          <span className={classes["clinic"]}>Clinic</span>
        </div>
        <div className={classes["technique"]}>
          <TechniqueItem title="Experience" text="275" />
          <TechniqueItem title="Liked" text="250" />
        </div>
        <div className={classes["buttons"]}>
          <button className={classes["btn"]} onClick={gotoPageNotFoundHandler}>
            Thông Tin
          </button>
          <button
            className={classes["btn"]}
            onClick={(e) => alert("Danh sách thú cưng đã nhận!")}
          >
            Danh sách
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
