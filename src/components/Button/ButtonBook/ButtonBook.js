import classes from "./ButtonBook.module.css";

const ButtonBook = ({ onClick, children }) => {
  return (
    <div className="d-flex justify-content-end">
      <button
        onClick={onClick}
        className={`${classes["btn-book"]} rounded fs-5 text-white mt-3`}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonBook;
