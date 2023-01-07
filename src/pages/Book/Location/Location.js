import React, { useRef, useState } from "react";
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
// import AsyncSelect from "react-select";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
// import { DatePicker, TimePicker } from "antd";
import { Space } from "antd";
import Loading from "../../Loading/Loading";
import constant from "../../../config/constant";
import { breadLocation } from "../../../mock/breadcrumb-data";

function Location({ formInformation, onSubmitForm }) {
  // const [date, setDate] = useState("");
  // const [time, setTime] = useState("");
  const [newValueForm, setNewValueForm] = useState(null);
  const clinicName = useRef();
  const navigate = useNavigate();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: constant.API_KEY,
    libraries: ["places"],
  });

  const handleOnClickSubmit = () => {
    onSubmitForm(newValueForm);
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

  const onSelectClinicHandler = (value, clinicSelected) => {
    clinicName.current.value = value.name + ", " + value.address;
    setNewValueForm({ ...formInformation, clinic: clinicSelected });
  };

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
              dataBread={breadLocation}
              onClick={onClickBreadcrumbHandler}
            />
          }
        >
          <>
            <Autocomplete>
              <InputBook label="Phòng khám" ref={clinicName} />
            </Autocomplete>
            <ClinicAround onClickClinic={onSelectClinicHandler} />

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
