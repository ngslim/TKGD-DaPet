import classes from "./ButtonBanner.module.css";

const ButtonBanner = ({ children }) => {
  return (
    <button className={`${classes["btn-banner"]} animated fadeInUp scrollto`}>
      {children}
    </button>
  );
};

export default ButtonBanner;
