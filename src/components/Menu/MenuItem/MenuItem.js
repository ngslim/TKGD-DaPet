import classes from "./MenuItem.module.css";

const MenuItem = ({ icon, title, selected, onClick }) => {
  return (
    <div
      className={`${classes["item"]} ${classes[selected]} d-flex gap-3 align-items-center py-2 px-3`}
      onClick={onClick}
    >
      {icon}
      <div className="px-2">{title}</div>
    </div>
  );
};

export default MenuItem;
