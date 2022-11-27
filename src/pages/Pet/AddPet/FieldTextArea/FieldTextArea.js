import classes from "./FieldTextArea.module.css";

const FieldTextArea = ({ title }) => {
  return (
    <div className="mt-2">
      <label className="fs-5">{title}</label>
      <textarea
        className={`${classes["field-input"]} border-0 rounded mt-1 p-3 fs-5`}
        type="text"
      />
    </div>
  );
};

export default FieldTextArea;
