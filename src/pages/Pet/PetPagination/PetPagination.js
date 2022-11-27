import classes from "./PetPagination.module.css";

const PetPagination = () => {
  const pages = [1, 2, 3, 4, 5];
  return (
    <div class="d-flex gap-1 justify-content-center mt-4">
      {pages.map((item, index) => {
        return (
          <button
            key={index}
            className={`${classes["btn-pagination-pet"]} btn btn-light`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default PetPagination;
