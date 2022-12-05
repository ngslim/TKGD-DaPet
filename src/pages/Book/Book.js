import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import { useNavigate } from "react-router-dom";
import classes from "./Book.module.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb/Breadcrumb";
import InputBook from "../../components/Input/InputBook/InputBook";
import FormBook from "../../components/Form/FormBook/FormBook";
import ButtonBook from "../../components/Button/ButtonBook/ButtonBook";
import FieldTextArea from "../Pet/AddPet/FieldTextArea/FieldTextArea";

function Book() {
  const navigate = useNavigate();

  const gotoBookLocation = () => {
    navigate("/book/location");
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

  return (
    <div className={classes["book-page"]}>
      <Header />
      <div className="d-flex p-2 gap-2">
        <div className={`${classes["menu-sidebar"]} d-flex flex-column gap-2`}>
          <Menu />
        </div>
        <FormBook
          breadcrumb={<Breadcrumb dataBread={dataBread} />}
          title="ĐĂNG KÝ KHÁM BỆNH"
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
                <input
                  className={`${classes["field-input"]} border-0 rounded mt-1 px-3 fs-5`}
                  type="text"
                />
              </div>
            </div>

            <FieldTextArea title="Mô tả triệu chứng" />

            <InputBook label="Khác" />
            <ButtonBook onClick={gotoBookLocation}>Đăng ký khám</ButtonBook>
          </>
        </FormBook>
      </div>
      <Footer />
    </div>
  );
}

export default Book;
