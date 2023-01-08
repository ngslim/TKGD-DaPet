import classes from "./FieldTextArea.module.css";

const FieldTextArea = ({ title, value, onChange }) => {
  return (
    <div className="mt-2">
      <label className="fs-5">{title}</label>
      <textarea
        className={`${classes["field-input"]} border-0 rounded mt-1 p-3 fs-5`}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default FieldTextArea;
