import classes from "./BreadcrumbItem.module.css";

const BreadcrumbItem = (props) => {
  const { onClick, title, current } = props;

  return (
    <div
      className={`${classes["breadcrumb-item"]} py-2 px-1 ${classes[current]}`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default BreadcrumbItem;
