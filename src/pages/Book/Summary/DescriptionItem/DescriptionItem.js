// import classes from "./DescriptionItem.module.css";

const DescriptionItem = ({ title, description, children }) => {
  return (
    <div className="mt-2 mx-2">
      <div className="fs-5">{title}</div>
      <div className="fs-5 fw-bold">
        {description}
        {children}
      </div>
    </div>
  );
};

export default DescriptionItem;
