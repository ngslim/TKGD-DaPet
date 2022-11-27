import classes from "./ButtonBanner.module.css";

const ButtonBanner = ({ onClick, children }) => {
  return (
    <button
      className={`${classes["btn-banner"]} animated fadeInUp scrollto`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonBanner;
