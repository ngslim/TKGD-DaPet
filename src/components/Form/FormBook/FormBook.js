import classes from "./FormBook.module.css";

const FormBook = ({ title, breadcrumb, summaryBackground, children }) => {
  return (
    <div className={classes["container-formbook"]}>
      {breadcrumb}
      <div
        className={`${classes["content-formbook"]} rounded d-flex flex-column`}
      >
        <div
          className={`${classes["title-head"]} rounded-top align-items-center`}
        >
          <div className="px-4 py-2 fs-2 text-white fw-bold">{title}</div>
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
