import classes from "./BreadcrumbItem.module.css";

const BreadcrumbItem = (props) => {
  const { title, current, role, onClick } = props;

  return (
    <div
      className={`${classes["breadcrumb-item"]} py-2 px-1 ${classes[current]} ${classes[role]}`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default BreadcrumbItem;
