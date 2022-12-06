import classes from "./InputBook.module.css";

const InputBook = ({ label, small, medium, children }) => {
  return (
    <div className="mt-3">
      <div className="fs-5">{label}</div>
      <input
        className={`${classes["field-input"]} ${classes[small]} ${classes[medium]} border-0 rounded mt-1 px-3 fs-5`}
        type="text"
        placeholder=""
      />
      {children}
    </div>
  );
};

export default InputBook;
