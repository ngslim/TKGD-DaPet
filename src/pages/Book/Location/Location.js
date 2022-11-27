import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu/Menu";
// import { useNavigate } from "react-router-dom";
import { BsCalendar } from "react-icons/bs";
import classes from "./Location.module.css";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb/Breadcrumb";
import FormBook from "../../../components/Form/FormBook/FormBook";
import InputBook from "../../../components/Input/InputBook/InputBook";
import ClinicAround from "./ClinicAround/ClinicAround";
import ButtonBook from "../../../components/Button/ButtonBook/ButtonBook";

function Location() {
  // const navigate = useNavigate();

  // const handleOnClickBook = () => {
  //   navigate("/book");
  // };

  // const handleOnClickSubmit = () => {
  //   navigate("/book/summary");
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
      current: "current",
    },
  ];

  return (
    <div className={classes["location-page"]}>
      <Header />
      <div className="d-flex p-2 gap-2">
        <div className={`${classes["menu-sidebar"]} d-flex flex-column gap-2`}>
          <Menu />
        </div>
        <FormBook
          breadcrumb={<Breadcrumb dataBread={dataBread} />}
          title="LỰA CHỌN PHÒNG KHÁM"
        >
          <>
            <InputBook label="Tên thú cưng" />
            <InputBook label="Tên phòng khám" />
            <InputBook label="Tên bác sĩ" />
            <InputBook label="Thời gian" small="small">
              <BsCalendar className={classes["icon-calendar"]} />
            </InputBook>
            <ClinicAround />
            <ButtonBook>Đăng ký khám</ButtonBook>
          </>
        </FormBook>
      </div>
      <Footer />
    </div>
  );
}

export default Location;
