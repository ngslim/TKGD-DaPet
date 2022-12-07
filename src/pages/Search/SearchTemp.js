import classes from "./SearchTemp.module.css";
import Header from "../../components/Header/Header";
import FormBook from "../../components/Form/FormBook/FormBook";
import Menu from "../../components/Menu/Menu";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb/Breadcrumb";
import { useNavigate } from "react-router-dom";

const dataBread = [
  {
    title: "Đăng ký khám",
  },
  {
    title: "Nhập thông tin",
  },
  {
    title: "Chọn phòng khám",
    current: "current",
  },
];

const SearchTemp = () => {
  const navigate = useNavigate("/");

  const gotoHomePageHandler = () => {
    navigate("/");
  };

  const gotoBookHandler = () => {
    navigate("/book");
  };

  const onClickBreadcrumbHandler = (index) => {
    switch (index) {
      case 0:
        navigate("/book");
        break;
      case 1:
        navigate("/book");
        break;
      case 2:
        navigate("/book/location");
        break;
      case 3:
        navigate("/book/summary");
        break;
      default:
        navigate("/book");
        break;
    }
  };

  return (
    <div className={classes["summary-page"]}>
      <Header />
      <div className="d-flex p-2 gap-2">
        <div className="d-flex flex-column gap-2" style={{ minWidth: "300px" }}>
          <Menu />
        </div>
        <FormBook
          title={
            <Breadcrumb
              dataBread={dataBread}
              onClick={onClickBreadcrumbHandler}
            />
          }
          summaryBackground="background-summary-book"
        >
          <div className="d-flex justify-content-end p-3">
            <button
              className={`${classes["btn-confirm"]} rounded fs-5 fw-semibold`}
              onClick={gotoBookHandler}
            >
              Hủy
            </button>
            <button
              className={`${classes["btn-confirm"]} rounded fs-5 fw-semibold`}
              onClick={gotoHomePageHandler}
            >
              Xác nhận
            </button>
          </div>
        </FormBook>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default SearchTemp;
