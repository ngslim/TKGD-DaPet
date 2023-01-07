import React, { useRef, useState } from "react";
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
import { useJsApiLoader } from "@react-google-maps/api";
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

function Book({ onSubmitForm }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [owner, setOwner] = useState("");
  const [phone, setPhone] = useState("");
  const [symptom, setSymptom] = useState([]);
  const [other, setOther] = useState("");
  // const [image, setImage] = useState([]);

  const nameRef = useRef();
  // useEffect(() => {
  //   function getBase64Image(img) {
  //     if (img) {
  //       var canvas = document.createElement("canvas");
  //       canvas.width = img.width;
  //       canvas.height = img.height;

  //       var ctx = canvas.getContext("2d");
  //       ctx.drawImage(img, 0, 0);

  //       var dataURL = canvas.toDataURL("image/png");

  //       return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  //     }
  //   }
  //   const bannerImage = document.getElementById("bannerImg");
  //   const imgData = getBase64Image(bannerImage);
  //   localStorage.setItem("imgData", imgData);
  // }, []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: constant.API_KEY,
    libraries: ["places"],
  });
  const navigate = useNavigate();

  const checkValidationInput = (formInformation) => {
    let message = document.getElementById("message");
    const subHandler = (field) => {
      message.style.display = "block";
      message.innerHTML = `Please enter your ${field}`;
    };

    if (formInformation.name === "") {
      subHandler("pet name");
      document.getElementById("name").focus();
      return false;
    }
    if (formInformation.type === "" || formInformation.type === undefined) {
      subHandler("pet type");
      return false;
    }
    if (formInformation.owner === "") {
      subHandler("owner");
      document.getElementById("owner").focus();
      return false;
    }

    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (!re.test(formInformation.phone)) {
      message.style.display = "block";
      message.innerHTML = `Please enter your valid phone number (10 numbers)`;
      document.getElementById("phone").focus();
      return false;
    }
    if (formInformation.phone === "") {
      subHandler("telephone");
      document.getElementById("phone").focus();
      return false;
    }

    if (formInformation.symptom.length === 0) {
      subHandler("symptoms");
      return false;
    } else if (
      formInformation.symptom[formInformation.symptom.length - 1].length === 0
    ) {
      subHandler("symptoms");
      return false;
    }
    if (formInformation.other === "") {
      subHandler("details");
      document.getElementById("other").focus();
      return false;
    }

    return true;
  };

  const submitFormHandler = () => {
    // setAddress(address.current.value);
    const formInformation = {
      name,
      type: type.value,
      owner,
      phone,
      symptom,
      other,
    };
    if (checkValidationInput(formInformation)) {
      onSubmitForm(formInformation);
      navigate("/book/location");
    }
    //onFileUpload();
  };

  const onFileChange = (e) => {
    // setImage(e.target.files[0]);
  };

  // const onFileUpload = () => {
  //   // Create an object of formData
  //   const formData = new FormData();

  //   // Update the formData object
  //   //formData.append("myFile", image, image.name);

  //   // Details of the uploaded file

  //   // Request made to the backend api
  //   // Send formData object
  // };

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
          <span className={classes["error"]} id="message"></span>
          <>
            <InputBook
              id="name"
              label="Tên thú cưng"
              ref={nameRef}
              value={name}
              onChange={(value) => setName(value)}
            />

            <div className="mt-3">
              <label className="fs-5">
                Loại thú cưng<span style={{ color: "red" }}>*</span>
              </label>
              <CreatableSelect
                isClearable
                id="type"
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
                onChange={(choice) => setType(choice)}
              />
            </div>

            <InputBook
              label="Chủ thú cưng"
              id="owner"
              value={owner}
              onChange={(value) => setOwner(value)}
            />

            <div className="mt-3 d-flex gap-3">
              <div>
                <label className="fs-5">
                  SĐT<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  className={`${classes["field-input"]} border-0 rounded mt-1 px-3 fs-5`}
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-2">
              <label className="fs-5 py-2">
                Triệu chứng<span style={{ color: "red" }}>*</span>
              </label>
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
                onChange={(choice) => setSymptom((prev) => [...prev, choice])}
              />
            </div>

            <InputBook
              label="Chi tiết triệu chứng"
              value={other}
              id="other"
              onChange={(value) => setOther(value)}
            />
            <div className="d-flex gap-3 mt-4">
              <div className="mt-1 fs-5">Hình ảnh</div>

              <input
                title=""
                type="file"
                // multiple
                // accept="images/*"
                id="bannerImg"
                className={`${classes["btn-add-img"]} btn btn-secondary`}
                onChange={onFileChange}
              />
            </div>
            <ButtonBook onClick={submitFormHandler}>Đăng ký khám</ButtonBook>
          </>
        </FormBook>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default Book;
