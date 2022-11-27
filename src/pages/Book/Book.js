import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import { useNavigate } from "react-router-dom";
import classes from "./Book.module.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb/Breadcrumb";
import InputBook from "../../components/Input/InputBook/InputBook";

function Book() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/book/location");
  };

  const dataBread = [
    {
      title: "Đăng ký khám",
    },
    {
      title: "Nhập thông tin",
    },
  ];

  return (
    <div className={classes["book-page"]}>
      <Header />
      <div className="d-flex p-2 gap-2">
        <div className={`${classes["menu-sidebar"]} d-flex flex-column gap-2`}>
          <Menu />
        </div>
        <div className={classes["container-book"]}>
          <Breadcrumb dataBread={dataBread} />
          <div
            className={`${classes["content-book"]} rounded d-flex flex-column`}
          >
            <div
              className={`${classes["title-head"]} rounded-top align-items-center`}
            >
              <div className="px-4 py-2 fs-2 text-white fw-bold">
                ĐĂNG KÝ KHÁM BỆNH
              </div>
            </div>
            <div className={`${classes["container-input"]} rounded-bottom p-4`}>
              <InputBook label="Tên thú cưng" />

              <div className="mt-3">
                <label className="fs-5">Loại thú cưng:</label>
                <select
                  className={`${classes["field-select"]} form-select fs-5" id="floatingSelect`}
                >
                  <option value="1" selected>
                    Mèo
                  </option>
                  <option value="2">Chó</option>
                </select>
              </div>

              <InputBook label="Chủ thú cưng" />
              <div className="mt-3 d-flex gap-3">
                <div>
                  <label className="fs-5">SĐT:</label>
                  <input
                    className={`${classes["field-input"]} border-0 rounded mt-1 px-3 fs-5`}
                    type="text"
                  />
                </div>
                <div className="flex-fill">
                  <label className="fs-5">Địa chỉ:</label>
                  <input
                    className={`${classes["field-input"]} border-0 rounded mt-1 px-3 fs-5`}
                    type="text"
                  />
                </div>
              </div>
              <div className="mt-2">
                <label className="fs-5">Mô tả triệu chứng:</label>
                <textarea
                  className={`${classes["field-input"]} ${classes["high"]} border-0 rounded mt-1 p-3 fs-5`}
                  type="text"
                />
              </div>
              <div className="mt-2">
                <label className="fs-5">Khác:</label>
                <input
                  className={`${classes["field-input"]} border-0 rounded mt-1 px-3 fs-5`}
                  type="text"
                />
              </div>
              <div className={`d-flex justify-content-end`}>
                <button
                  onClick={handleOnClick}
                  className={`${classes["btn-add"]} rounded fs-5 text-white mt-3`}
                >
                  Đăng ký khám
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Book;
