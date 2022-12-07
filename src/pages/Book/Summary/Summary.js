import React from "react";
import Header from "../../../components/Header/Header";
// import Footer from "../../../components/Footer/Footer";
import Menu from "../../../components/Menu/Menu";
import { useNavigate } from "react-router-dom";
import classes from "./Summary.module.css";
import FormBook from "../../../components/Form/FormBook/FormBook";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb/Breadcrumb";
import ProfileBook from "./ProfileBook/ProfileBook";
import Description from "./Description/Description";

const dataBread = [
  {
    title: "Đăng ký khám",
  },
  {
    title: "Nhập thông tin",
  },
  {
    title: "Chọn phòng khám",
  },
  {
    title: "Thông tin lịch khám",
    current: "current",
  },
];

function Summary() {
  const navigate = useNavigate();

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
          <div className="row">
            <div className="d-flex gap-3 px-3 pb-3">
              <div
                className={`${classes["summary-profile"]} bg-white p-3 rounded`}
              >
                <div className={`${classes["img-profile"]} mx-auto mb-4 mt-4`}>
                  <img src="/images/profile.jpg" className="img-fluid" alt="" />
                </div>

                <ProfileBook />
              </div>
              <Description />
            </div>
          </div>
          <div className="d-flex justify-content-end p-3">
            <button
              className={`${classes["btn-confirm"]} rounded fs-5 fw-semibold`}
              onClick={gotoBookHandler}
            >
              Hủy
            </button>
            <button
              className={`${classes["btn-confirm"]} rounded fs-5 fw-semibold`}
              onClick={gotoBookHandler}
            >
              Xác nhận
            </button>
          </div>
        </FormBook>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default Summary;
