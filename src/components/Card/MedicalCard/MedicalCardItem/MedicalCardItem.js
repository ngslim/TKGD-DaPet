import classes from "./MedicalCardItem.module.css";

const MedicalCardItem = ({ item, onClick }) => {
  return (
    <article
      className={`${classes["postcard"]} ${classes["dark"]} ${classes["blue"]}`}
      onClick={() => onClick(item.id)}
    >
      <button className={classes["postcard-img-link"]}>
        <img
          className={classes["postcard-img"]}
          src="https://picsum.photos/1000/1000"
          alt="Title"
        />
      </button>
      <div className={classes["postcard-text"]}>
        <button className={`${classes["postcard-title"]} ${classes["blue"]}`}>
          {item.name}
        </button>
        <div className={classes["small"]}>
          <time dateTime="2020-05-25 12:00:00">
            <i className={`fas fa-calendar-alt mr-2 ${classes["icon"]}`}></i>
            <span>{item.clinic.timeline + " " + item.clinic.date}</span>
          </time>
        </div>
        <div
          className={`${classes["postcard-bar"]} ${classes["postcard-bar-blue"]}`}
        ></div>
        <div className={classes["postcard-preview-txt"]}>{item.comment}</div>
        <ul className={classes["postcard-tagbox"]}>
          <li className={classes["tag-item"]}>
            <i className={`fas fa-tag mr-2 ${classes["icon"]}`}></i>
            {item.type}
          </li>
          {item.description.map((element, index) => {
            return (
              <li key={index} className={classes["tag-item"]}>
                <i className={`fas fa-play mr-2 ${classes["icon"]}`}></i>
                {element.value}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

export default MedicalCardItem;
