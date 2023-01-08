import React from "react";
import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import { useNavigate } from "react-router-dom";
import classes from "./Pet.module.css";
import PetList from "./PetList/PetList";
// import PetPagination from "./PetPagination/PetPagination";
import HeaderContentPet from "./HeaderContentPet/HeaderContentPet";

function Pet() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/pet/add");
  };

  return (
    <div className={classes["pet-page"]}>
      <Header />
      <div className="d-flex p-2 gap-2">
        <div className={`${classes["menu-sidebar"]} d-flex flex-column gap-2`}>
          <Menu />
        </div>
        <div className={classes["container-pet-page"]}>
          <div className="d-flex"></div>
          <div className={`${classes["content-pet-page"]} rounded flex-column`}>
            <HeaderContentPet
              title="DANH SÁCH THÚ CƯNG"
              labelButton="Tạo hồ sơ"
              onClickButton={handleOnClick}
            />
            <div className={`${classes["main-pet-page"]} rounded-bottom px-5`}>
              <PetList />

              {/* <PetPagination /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Pet;
