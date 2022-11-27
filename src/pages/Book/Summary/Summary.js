import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu";
import { useNavigate } from "react-router-dom";
import classes from "./Summary.module.css";
import FormBook from "../../../components/Form/FormBook/FormBook";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb/Breadcrumb";
import ProfileBook from "./ProfileBook/ProfileBook";
import Description from "./Description/Description";

function Summary() {
  const navigate = useNavigate();

  // const handleOnClickBook = () => {
  //   navigate("/book");
  // };

  // const handleOnClickLocation = () => {
  //   navigate("/book/location");
  // };

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

  return (
    <div className={classes["summary-page"]}>
      <Header />
      <div className="d-flex p-2 gap-2">
        <div className="d-flex flex-column gap-2" style={{ minWidth: "300px" }}>
          <Menu />
        </div>
        <FormBook
          breadcrumb={<Breadcrumb dataBread={dataBread} />}
          title="THÔNG TIN LỊCH KHÁM"
          summaryBackground="background-summary-book"
        >
          <div className="d-flex gap-3 px-3 pb-3">
            <div
              className={`${classes["summary-profile"]} bg-white p-3 rounded`}
            >
              <div
                className={`${classes["img-profile"]} mx-auto mb-4 mt-4`}
              ></div>

              <ProfileBook />
            </div>
            <Description />
          </div>
          <div className="d-flex justify-content-end p-3">
            <button
              className={`${classes["btn-confirm"]} rounded fs-5 fw-semibold`}
            >
              Xác nhận
            </button>
          </div>
        </FormBook>
      </div>
      <Footer />
    </div>
  );
}

export default Summary;
