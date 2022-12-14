import React from "react";
import Header from "../../../components/Header/Header";
// import Footer from "../../../components/Footer/Footer";
import Menu from "../../../components/Menu/Menu";
import { useNavigate } from "react-router-dom";
import classes from "./Summary.module.css";
import FormBook from "../../../components/Form/FormBook/FormBook";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb/Breadcrumb";
// import ProfileBook from "./ProfileBook/ProfileBook";
import Description from "./Description/Description";
import { breadSummary } from "../../../mock/breadcrumb-data";
import { medicalApp } from "../../../mock/medical-application/medical-application";

function Summary({ formInformation }) {
  const navigate = useNavigate();

  const saveData = () => {
    const dataSave = {
      id: medicalApp.length + 1,
      name: formInformation.name,
      owner: formInformation.owner,
      type: formInformation.type,
      phone: formInformation.phone,
      address: formInformation.address,
      description: formInformation.symptom[formInformation.symptom.length - 1],
      comment: formInformation.other,
      clinic: formInformation.clinic,
    };
    medicalApp.push(dataSave);
    navigate("/");
  };

  const gotoBookHandler = () => {
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

  return (
    <div className={classes["summary-page"]}>
      <Header />
      <div className="d-flex p-2 gap-2">
        <div className="d-flex flex-column gap-2" style={{ minWidth: "300px" }}>
          <Menu />
        </div>
        <FormBook
          title={
            <Breadcrumb
              dataBread={breadSummary}
              onClick={onClickBreadcrumbHandler}
            />
          }
          summaryBackground="background-summary-book"
        >
          <div className="row">
            <div className="d-flex gap-3 px-3 pb-3">
              {formInformation && <Description info={formInformation} />}
            </div>
          </div>
          <div className="d-flex justify-content-end p-3">
            <button
              className={`${classes["btn-confirm"]} rounded fs-5 fw-semibold`}
              onClick={gotoBookHandler}
            >
              H???y
            </button>
            <button
              className={`${classes["btn-confirm"]} rounded fs-5 fw-semibold`}
              onClick={saveData}
            >
              X??c nh???n
            </button>
          </div>
        </FormBook>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default Summary;
