import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import { useNavigate } from "react-router-dom";

function Book() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/book/location");
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
            <div className="py-2 px-1 fw-bold" style={{ color: "#098963" }}>
              <div>Nhập thông tin</div>
            </div>
          </div>
          <div
            className=" rounded d-flex flex-column"
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
                ĐĂNG KÝ KHÁM BỆNH
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
                <div className="fs-5">Loại thú cưng:</div>
                <select
                  class="form-select fs-5"
                  id="floatingSelect"
                  style={{
                    width: "200px",
                    height: "50px",
                    outline: "none",
                    border: "none",
                    backgroundColor: "#F3F3F3",
                  }}
                >
                  <option selected>Mèo</option>
                  <option value="1">Chó</option>
                </select>
              </div>
              <div className="mt-3">
                <div className="fs-5">Chủ thú cưng:</div>
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
              <div className="mt-3 d-flex gap-3">
                <div>
                  <div className="fs-5">SĐT:</div>
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
                <div className="flex-fill">
                  <div className="fs-5">Địa chỉ:</div>
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
              </div>
              <div className="mt-2">
                <div className="fs-5">Mô tả triệu chứng:</div>
                <textarea
                  className="border-0 rounded mt-1 p-3 fs-5"
                  style={{
                    width: "100%",
                    height: "100px",
                    outline: "none",
                    backgroundColor: "#F3F3F3",
                    placeholdercolor: "#A0A0A0",
                  }}
                  type="text"
                />
              </div>
              <div className="mt-2">
                <div className="fs-5">Khác:</div>
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
              <div className="d-flex justify-content-end">
                <button
                  onClick={handleOnClick}
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

export default Book;
