import classes from "./FormBook.module.css";

const FormBook = ({ title, summaryBackground, children }) => {
  return (
    <div className={classes["container-formbook"]}>
      <div
        className={`${classes["content-formbook"]} rounded d-flex flex-column`}
      >
        <div
          className={`${classes["title-head"]} rounded-top align-items-center`}
        >
          <div className="px-4 py-1 fs-4 text-white">{title}</div>
        </div>
        <div
          className={`${classes["container-input"]} ${classes[summaryBackground]} rounded-bottom p-4`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormBook;
