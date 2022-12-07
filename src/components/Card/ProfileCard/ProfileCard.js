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
          <h3>Olivia Gomez</h3>
          <span className={classes["clinic"]}>Doctor</span>
        </div>
        <div className={classes["technique"]}>
          <TechniqueItem title="Experience" text="2" />
          <TechniqueItem title="Followers" text="209" />
          <TechniqueItem title="Like" text="5000" />
        </div>
        <div className={classes["buttons"]}>
          <button className={classes["btn"]} onClick={gotoPageNotFoundHandler}>
            Message
          </button>
          <button
            className={classes["btn"]}
            onClick={(e) => alert("You liked this person!")}
          >
            Like
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
