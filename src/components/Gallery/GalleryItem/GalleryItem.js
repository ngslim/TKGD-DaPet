import classes from "./GalleryItem.module.css";

const GalleryItem = ({ item }) => {
  return (
    <div className="col-lg-3 col-md-4">
      <div className={classes["gallery-item"]}>
        <a href={item.image} data-gall="gallery-item">
          <img src={item.image} alt="" className="img-fluid" />
        </a>
      </div>
    </div>
  );
};

export default GalleryItem;
