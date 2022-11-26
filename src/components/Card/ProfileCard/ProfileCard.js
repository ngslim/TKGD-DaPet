import classes from "./ProfileCard.module.css";
import TechniqueItem from "./TechniqueItem/TechniqueItem";

const ProfileCard = () => {
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
          <span className={classes["clinic"]}>Developer & Designer</span>
        </div>
        <div className={classes["technique"]}>
          <TechniqueItem title="Following" text="120" />
          <TechniqueItem title="Followers" text="5000" />
          <TechniqueItem title="Posts" text="209" />
        </div>
        <div className={classes["buttons"]}>
          <button className={classes["btn"]}>Message</button>
          <button className={classes["btn"]}>Follow Me</button>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
