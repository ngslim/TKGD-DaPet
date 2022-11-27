import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu";
import { useNavigate } from "react-router-dom";
import { BsCalendar } from "react-icons/bs";
import classes from "./Location.module.css";

function Location() {
  const navigate = useNavigate();

  const handleOnClickBook = () => {
    navigate("/book");
  };

  const handleOnClickSubmit = () => {
    navigate("/book/summary");
  };

  return (
    <div style={{ background: "#f3f3f3" }}>
      <Header />
      <div className="d-flex p-2 gap-2">
        <div className="d-flex flex-column gap-2" style={{ minWidth: "300px" }}>
          <Menu />
        </div>
        <div style={{ width: "100%" }}>
          <div className="d-flex">
            <div className="py-2 px-1" style={{ color: "#A0A0A0" }}>
              <div>Đăng ký khám</div>
            </div>
            <div className="py-2 px-1" style={{ color: "#A0A0A0" }}>
              <div>&#62;</div>
            </div>
            <div
              onClick={handleOnClickBook}
              className="py-2 px-1"
              style={{ color: "#A0A0A0", cursor: "pointer" }}
            >
              <div>Nhập thông tin</div>
            </div>
            <div className="py-2 px-1" style={{ color: "#A0A0A0" }}>
              <div>&#62;</div>
            </div>
            <div className="py-2 px-1 fw-bold" style={{ color: "#098963" }}>
              <div>Chọn phòng khám</div>
            </div>
          </div>
          <div
            className="rounded d-flex flex-column"
            style={{
              backgroundColor: "#FFFFFF",
              width: "100%",
            }}
          >
            <div
              className="rounded-top align-items-center"
              style={{
                width: "100%",
                height: "65px",
                backgroundColor: "#00C288",
              }}
            >
              <div className="px-4 py-2 fs-2 text-white fw-bold">
                LỰA CHỌN PHÒNG KHÁM
              </div>
            </div>
            <div
              className="rounded-bottom p-4"
              style={{
                width: "100%",
                backgroundColor: "white",
              }}
            >
              <div className="">
                <div className="fs-5">Tên thú cưng:</div>
                <input
                  className="border-0 rounded mt-1 px-3 fs-5"
                  style={{
                    width: "100%",
                    height: "50px",
                    outline: "none",
                    backgroundColor: "#F3F3F3",
                    placeholdercolor: "#A0A0A0",
                  }}
                  type="text"
                />
              </div>
              <div className="mt-3">
                <div className="fs-5">Tên phòng khám:</div>
                <input
                  className="border-0 rounded mt-1 px-3 fs-5"
                  style={{
                    width: "100%",
                    height: "50px",
                    outline: "none",
                    backgroundColor: "#F3F3F3",
                    placeholdercolor: "#A0A0A0",
                  }}
                  type="text"
                />
              </div>
              <div className="mt-3">
                <div className="fs-5">Tên bác sĩ:</div>
                <input
                  className="border-0 rounded mt-1 px-3 fs-5"
                  style={{
                    width: "100%",
                    height: "50px",
                    outline: "none",
                    backgroundColor: "#F3F3F3",
                    placeholdercolor: "#A0A0A0",
                  }}
                  type="text"
                />
              </div>
              <div className="mt-2">
                <div className="fs-5">Thời gian:</div>
                <div
                  className="border border-0 rounded mt-1 fs-5 py-2 px-3"
                  style={{
                    width: "350px",
                    height: "50px",
                    backgroundColor: "#F3F3F3",
                  }}
                >
                  <input
                    className="border-0 px-4"
                    style={{
                      outline: "none",
                      backgroundColor: "transparent",
                      placeholdercolor: "#A0A0A0",
                    }}
                    type="datetime"
                  />
                  <BsCalendar color="#A0A0A0" />
                </div>
              </div>
              <div
                className="rounded mt-4 pb-3"
                style={{ backgroundColor: "#00C288", height: "auto" }}
              >
                <div className="p-3 text-white fs-5 fw-semibold">
                  Phòng khám quanh bạn
                </div>
                <div
                  className="px-4 row justify-content-around"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, calc(95%/3))",
                    gap: "16px",
                  }}
                >
                  <div
                    className="rounded p-3"
                    style={{ backgroundColor: "white", height: "auto" }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          minWidth: "140px",
                          height: "140px",
                          backgroundColor: "#65a390",
                        }}
                      ></div>
                      <div className="d-flex flex-column gap-2 px-3">
                        <div className="fs-5 fw-bold">Phòng khám A</div>
                        <div
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded p-3"
                    style={{ backgroundColor: "white", height: "auto" }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          minWidth: "140px",
                          height: "140px",
                          backgroundColor: "#65a390",
                        }}
                      ></div>
                      <div className="d-flex flex-column gap-2 px-3">
                        <div className="fs-5 fw-bold">Phòng khám A</div>
                        <div
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded p-3"
                    style={{ backgroundColor: "white", height: "auto" }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          minWidth: "140px",
                          height: "140px",
                          backgroundColor: "#65a390",
                        }}
                      ></div>
                      <div className="d-flex flex-column gap-2 px-3">
                        <div className="fs-5 fw-bold">Phòng khám A</div>
                        <div
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  onClick={handleOnClickSubmit}
                  className="rounded fs-5 text-white mt-3"
                  style={{
                    border: "none",
                    backgroundColor: "#00C288",
                    height: "50px",
                    width: "250px",
                  }}
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

export default Location;
