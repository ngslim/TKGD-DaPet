import classes from "./InputBook.module.css";

const InputBook = ({ label }) => {
  return (
    <div className="mt-3">
      <label className="fs-5">{label}</label>
      <input
        className={`${classes["field-input"]} border-0 rounded mt-1 px-3 fs-5`}
        type="text"
      />
    </div>
  );
};

export default InputBook;
