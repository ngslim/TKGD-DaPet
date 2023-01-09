import classes from "./Gallery.module.css";
import GalleryItem from "./GalleryItem/GalleryItem";

const Gallery = () => {
  const data = [
    {
      image: "./images/gallery/gallery-1.jpg",
    },
    {
      image: "./images/gallery/gallery-2.jpg",
    },
    {
      image: "./images/gallery/gallery-3.jpg",
    },
    {
      image: "./images/gallery/gallery-4.jpg",
    },
    {
      image: "./images/gallery/gallery-5.jpg",
    },
    {
      image: "./images/gallery/gallery-6.jpg",
    },
    {
      image: "./images/gallery/gallery-7.jpg",
    },
    {
      image: "./images/gallery/gallery-8.jpg",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className={classes["section-title"]}>
          <h2>Thư viện ảnh</h2>
          <p>Một số hình ảnh thú cưng: </p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row g-0">
          {data.map((item, index) => {
            return <GalleryItem key={index} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
