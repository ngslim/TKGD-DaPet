import React from "react";
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

const dataSickness = [
  { id: 1, value: "Nôn mửa", label: "Non mua" },
  { id: 2, value: "Tiêu chảy", label: "Tieu chay" },
  { id: 3, value: "Chảy máu", label: "Chay mau" },
  { id: 4, value: "Da nhăn nheo", label: "Da nhan nheo" },
  { id: 5, value: "Hạ thân nhiệt", label: "Ha than nhiet" },
  { id: 6, value: "Thở khó khăn", label: "Tho kho khan" },
  { id: 7, value: "Tiếng khò khè", label: "Tieng kho khe" },
  { id: 8, value: "Rụng lông", label: "Rung long" },
  { id: 9, value: "Khó ăn", label: "Kho an" },
];

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
    googleMapsApiKey: "AIzaSyDO8rWBm94mFbSeGx2_XydkVMQmDgRjUjM",
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

  const dataBread = [
    {
      title: "Đăng ký khám",
    },
    {
      title: "Nhập thông tin",
      current: "current",
    },
  ];

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
              dataBread={dataBread}
              onClick={onClickBreadcrumbHandler}
            />
          }
        >
          <>
            <InputBook label="Tên thú cưng" />

            <div className="mt-3">
              <label className="fs-5">Loại thú cưng</label>
              <select
                className={`${classes["field-select"]} form-select fs-5" id="floatingSelect`}
              >
                <option value="1">Mèo</option>
                <option value="2">Chó</option>
                <option value="3">Chim</option>
                <option value="4">Cá</option>
              </select>
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
