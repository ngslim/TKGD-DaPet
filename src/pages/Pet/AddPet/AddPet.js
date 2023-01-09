import React, { useState } from "react";
import Header from "../../../components/Header/Header";
// import Footer from "../../../components/Footer/Footer";
import Menu from "../../../components/Menu/Menu";
import { useNavigate } from "react-router-dom";
import classes from "./AddPet.module.css";
import BreadCrumb from "../../../components/Breadcrumb/Breadcrumb/Breadcrumb";
import HeaderContentPet from "../HeaderContentPet/HeaderContentPet";
import InputBook from "../../../components/Input/InputBook/InputBook";
import FieldTextArea from "./FieldTextArea/FieldTextArea";
import ButtonBook from "../../../components/Button/ButtonBook/ButtonBook";
import CreatableSelect from "react-select/creatable";
import AsyncSelect from "react-select";
import { breadAddPet } from "../../../mock/breadcrumb-data";
import { dataHealth, dataTypePet } from "../../../mock/pet-data";
import { userPets } from "../../../mock/user-pet/user-pet";
import { petOptions } from "../../../mock/user-pet/pets-options";

const filterHealth = (inputValue) => {
  return dataHealth.filter((item) =>
    item.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = (inputValue) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterHealth(inputValue));
    }, 1000);
  });
function AddPet() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [favorite, setFavorite] = useState("");
  const [symptom, setSymptom] = useState([]);
  const [image, setImage] = useState([]);
  const navigate = useNavigate();

  const checkValidation = (formInformation) => {
    let message = document.getElementById("message");
    const subHandler = (field) => {
      message.style.display = "block";
      message.innerHTML = `${field}`;
    };

    if (formInformation.name === "") {
      subHandler('Vui lòng nhập "Tên thú cưng"');
      document.getElementById("name").focus();
      return false;
    }
    if (formInformation.type === "" || formInformation.type === undefined) {
      subHandler('Vui lòng chọn "Loại thú cưng"');
      return false;
    }

    if (formInformation.description.length === 0) {
      subHandler('Vui lòng chọn "Tình trạng sức khỏe"');
      return false;
    } else if (
      formInformation.description[formInformation.description.length - 1]
        .length === 0
    ) {
      subHandler('Vui lòng chọn "Tình trạng sức khỏe"');
      return false;
    }
    if (formInformation.image.length === 0) {
      formInformation.image = "https://picsum.photos/1000/1000";
    }

    return true;
  };

  const submitFormHandler = () => {
    const formInformation = {
      name,
      type: type.value,
      favorite,
      description: symptom,
      image,
    };
    if (checkValidation(formInformation)) {
      formInformation.id = userPets.length + 1;
      formInformation.description =
        formInformation.description[formInformation.description.length - 1];

      const petOps = {
        id: formInformation.id,
        value: formInformation.name,
        label: formInformation.name,
      };
      userPets.push(formInformation);
      petOptions.push(petOps);
      gotoPetHandler();
    }
  };

  const gotoPageNotFoundHandler = () => {
    navigate("/page-not-found");
  };

  const gotoPetHandler = () => {
    navigate("/pet");
  };

  const onClickBreadcrumbHandler = (index) => {
    switch (index) {
      case 0:
        navigate("/pet");
        break;
      case 1:
        navigate("/pet/add");
        break;
      default:
        navigate("/pet");
        break;
    }
  };

  return (
    <div className={classes["addpet-page"]}>
      <Header />
      <div className="d-flex p-1 gap-2">
        <div className={`${classes["menu-sidebar"]} d-flex flex-column gap-2`}>
          <Menu />
        </div>
        <div className={classes["container-addpet-page"]}>
          <div
            className={`${classes["content-addpet-page"]} rounded flex-column`}
          >
            <HeaderContentPet
              title={
                <BreadCrumb
                  dataBread={breadAddPet}
                  onClick={onClickBreadcrumbHandler}
                />
              }
              labelButton="Theo dõi hàng ngày"
              onClickButton={gotoPageNotFoundHandler}
            />
            <span className={classes["error"]} id="message"></span>
            <div
              className={`${classes["input-group-addpet"]} rounded-bottom px-5 py-2`}
            >
              <InputBook
                label="Tên thú cưng"
                id="name"
                value={name}
                onChange={(value) => setName(value)}
              />

              <div className="mt-3">
                <label className="fs-5">
                  Loại thú cưng<span style={{ color: "red" }}>*</span>
                </label>
                <CreatableSelect
                  isClearable
                  options={dataTypePet}
                  placeholder=""
                  styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      border: "none",
                      background: "#f3f3f3",
                      width: "200px",
                      height: "50px",
                    }),
                    multiValue: (baseStyles) => ({
                      ...baseStyles,
                      background: "#00c288",
                    }),
                  }}
                  onChange={(choice) => setType(choice)}
                />
              </div>

              <FieldTextArea
                title="Sở thích"
                value={favorite}
                onChange={(value) => setFavorite(value)}
              />

              <div className="mt-3">
                <label className="fs-5 py-2">
                  Tình trạng sức khỏe<span style={{ color: "red" }}>*</span>
                </label>
                <AsyncSelect
                  isMulti
                  options={dataHealth}
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
                  onChange={(choice) => setSymptom((prev) => [...prev, choice])}
                />
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-3">
                  <div className="mt-1 fs-5">Hình ảnh</div>

                  <input
                    title=""
                    type="file"
                    // multiple
                    // accept="images/*"
                    className={`${classes["btn-add-img"]} btn btn-secondary`}
                    onChange={(event) => setImage(event.target.value)}
                  />
                </div>
                <div className="d-flex gap-3">
                  <ButtonBook onClick={submitFormHandler}>Xác nhận</ButtonBook>
                  <ButtonBook onClick={gotoPetHandler}>Hủy</ButtonBook>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default AddPet;
