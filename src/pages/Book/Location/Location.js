import React, { useState } from "react";
import Header from "../../../components/Header/Header";
// import Footer from "../../../components/Footer/Footer";
import Menu from "../../../components/Menu/Menu";
import { useNavigate } from "react-router-dom";
import classes from "./Location.module.css";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb/Breadcrumb";
import FormBook from "../../../components/Form/FormBook/FormBook";
import InputBook from "../../../components/Input/InputBook/InputBook";
import ClinicAround from "./ClinicAround/ClinicAround";
import ButtonBook from "../../../components/Button/ButtonBook/ButtonBook";
import AsyncSelect from "react-select";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import { DatePicker, Space, TimePicker } from "antd";
import Loading from "../../Loading/Loading";

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

const dataDoctor = [
  { id: 1, value: "Cob Liversedge", label: "Cob Liversedge" },
  { id: 2, value: "Allix Itzhak", label: "Allix Itzhak" },
  { id: 3, value: "Jeremiah Duer", label: "Jeremiah Duer" },
  { id: 4, value: "Clemens Finnis", label: "Clemens Finnis" },
  { id: 5, value: "Fayette Lawey", label: "Fayette Lawey" },
  { id: 6, value: "Larine Merrisson", label: "Larine Merrisson" },
  { id: 7, value: "Horten Ilieve", label: "Horten Ilieve" },
  { id: 8, value: "Rodrigo Spellsworth", label: "Rodrigo Spellsworth" },
  { id: 9, value: "Crichton O'Scollee", label: "Crichton O'Scollee" },
];

const filterDoctor = (inputValue) => {
  return dataDoctor.filter((item) =>
    item.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = (inputValue) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterDoctor(inputValue));
    }, 1000);
  });

function Location() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDO8rWBm94mFbSeGx2_XydkVMQmDgRjUjM",
    libraries: ["places"],
  });

  const handleOnClickSubmit = () => {
    navigate("/book/summary");
  };

  const handleOnClickCancel = () => {
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

  console.log("Date + time", date, time);
  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <div className={classes["location-page"]}>
      <Header />
      <div className="d-flex p-2 gap-2">
        <div className={`${classes["menu-sidebar"]} d-flex flex-column gap-2`}>
          <Menu />
        </div>
        <FormBook
          title={
            <Breadcrumb
              dataBread={dataBread}
              onClick={onClickBreadcrumbHandler}
            />
          }
        >
          <>
            <Autocomplete>
              <InputBook label="Tên phòng khám" />
            </Autocomplete>
            <ClinicAround />
            <div className="mt-3">
              <div className="fs-5">Tên bác sĩ</div>
              <AsyncSelect
                cacheOptions
                defaultOptions
                options={dataDoctor}
                loadOptions={promiseOptions}
                placeholder=""
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    border: "none",
                    background: "#f3f3f3",
                    height: "50px",
                  }),
                }}
              />
            </div>

            <div className="mt-3">
              <div className="fs-5">Lịch khám</div>
              <Space direction="horizontal">
                <DatePicker
                  className={classes["date-picker"]}
                  placeholder="Ngày (YYYY/mm/DD)"
                  onChange={(date, dateString) => {
                    setDate(dateString);
                  }}
                />
                <TimePicker
                  use12Hours
                  format="HH:mm"
                  placeholder="Giờ (HH:MM)"
                  className={classes["date-picker"]}
                  onChange={(time, timeString) => {
                    setTime(timeString);
                  }}
                />
              </Space>
            </div>
            <Space direction="horizontal" className={classes["btn-container"]}>
              <ButtonBook onClick={handleOnClickCancel}>Hủy</ButtonBook>
              <ButtonBook onClick={handleOnClickSubmit}>
                Đăng ký khám
              </ButtonBook>
            </Space>
          </>
        </FormBook>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Location;
