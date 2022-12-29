import React from "react";
import constant from "../../config/constant";
import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import { useNavigate } from "react-router-dom";
import classes from "./Book.module.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb/Breadcrumb";
import InputBook from "../../components/Input/InputBook/InputBook";
import FormBook from "../../components/Form/FormBook/FormBook";
import ButtonBook from "../../components/Button/ButtonBook/ButtonBook";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import Loading from "../Loading/Loading";
import AsyncSelect from "react-select";
import { breadBook } from "../../mock/breadcrumb-data";
import { dataSickness } from "../../mock/book-data";
import { dataTypePet } from "../../mock/pet-data";
import CreatableSelect from "react-select/creatable";

const filterSickness = (inputValue) => {
  return dataSickness.filter((item) =>
    item.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = (inputValue) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterSickness(inputValue));
    }, 1000);
  });

function Book() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: constant.API_KEY,
    libraries: ["places"],
  });
  const navigate = useNavigate();

  const gotoBookLocation = () => {
    navigate("/book/location");
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

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <div className={classes["book-page"]}>
      <Header />
      <div className="d-flex p-1 gap-2">
        <div className={`${classes["menu-sidebar"]} d-flex flex-column gap-2`}>
          <Menu />
        </div>
        <FormBook
          title={
            <Breadcrumb
              dataBread={breadBook}
              onClick={onClickBreadcrumbHandler}
            />
          }
        >
          <>
            <InputBook label="Tên thú cưng" />

            <div className="mt-3">
              <label className="fs-5">Loại thú cưng</label>
              <CreatableSelect
                isClearable
                options={dataTypePet}
                placeholder=""
                styles={{
                  control: (baseStyle) => ({
                    ...baseStyle,
                    width: "200px",
                    height: "50px",
                    outline: "none",
                    border: "none",
                    backgroundColor: "#f3f3f3",
                  }),
                }}
              />
            </div>

            <InputBook label="Chủ thú cưng" />

            <div className="mt-3 d-flex gap-3">
              <div>
                <label className="fs-5">SĐT</label>
                <input
                  className={`${classes["field-input"]} border-0 rounded mt-1 px-3 fs-5`}
                  type="text"
                />
              </div>

              <div className="flex-fill">
                <label className="fs-5">Địa chỉ</label>
                <Autocomplete>
                  <input
                    className={`${classes["field-input"]} border-0 rounded mt-1 px-3 fs-5`}
                    type="text"
                    placeholder=""
                  />
                </Autocomplete>
              </div>
            </div>

            <div className="mt-2">
              <label className="fs-5 py-2">Mô tả triệu chứng</label>
              <AsyncSelect
                isMulti
                options={dataSickness}
                cacheOptions
                defaultOptions
                loadOptions={promiseOptions}
                placeholder=""
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    border: "none",
                    background: "#f3f3f3",
                    height: "50px",
                  }),
                  multiValue: (baseStyles) => ({
                    ...baseStyles,
                    background: "#00c288",
                  }),
                }}
              />
            </div>

            <InputBook label="Khác" />
            <ButtonBook onClick={gotoBookLocation}>Đăng ký khám</ButtonBook>
          </>
        </FormBook>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Book;
