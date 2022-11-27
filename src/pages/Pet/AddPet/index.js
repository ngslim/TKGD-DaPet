import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu/Menu";
import { useNavigate } from "react-router-dom";
import classes from "./AddPet.module.css";
import BreadCrumb from "../../../components/Breadcrumb/Breadcrumb/Breadcrumb";
import HeaderContentPet from "../HeaderContentPet/HeaderContentPet";
import InputBook from "../../../components/Input/InputBook/InputBook";
import FieldTextArea from "./FieldTextArea/FieldTextArea";
import ButtonBook from "../../../components/Button/ButtonBook/ButtonBook";

function AddPet() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/pet");
  };

  const dataBread = [
    {
      title: "Danh sách thú cưng",
    },
    {
      title: "Tạo hồ sơ mới",
      current: "current",
    },
  ];

  return (
    <div className={classes["addpet-page"]}>
      <Header />
      <div className="d-flex p-2 gap-2">
        <div className={`${classes["menu-sidebar"]} d-flex flex-column gap-2`}>
          <Menu />
        </div>
        <div className={classes["container-addpet-page"]}>
          <BreadCrumb dataBread={dataBread} />
          <div
            className={`${classes["content-addpet-page"]} rounded flex-column`}
          >
            <HeaderContentPet
              title="HỒ SƠ THÚ CƯNG"
              labelButton="Theo dõi hàng ngày"
              onClickButton={handleOnClick}
            />
            <div
              className={`${classes["input-group-addpet"]} rounded-bottom px-3 py-2`}
            >
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

              <FieldTextArea title="Sở thích" />
              <FieldTextArea title="Dinh dưỡng" />
              <FieldTextArea title="Tình trạng sức khỏe" />

              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-3">
                  <div className="mt-1 fs-5">Hình ảnh</div>
                  <button className="btn btn-secondary">Thêm</button>
                </div>
                <div className="d-flex gap-3">
                  <ButtonBook onClick={handleOnClick}>Xác nhận</ButtonBook>
                  <ButtonBook onClick={handleOnClick}>Hủy</ButtonBook>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddPet;
