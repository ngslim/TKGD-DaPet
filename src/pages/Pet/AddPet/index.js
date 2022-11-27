import React from "react";
import Header from "../../../components/Header/Header";
import Account from "../../../components/Account";
import Footer from "../../../components/Footer";
import Menu from "../../../components/Menu";
import { useNavigate } from "react-router-dom";

function AddPet() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/pet");
  };

  return (
    <div style={{ background: "#f3f3f3" }}>
      <Header />
      <div className="d-flex p-2 gap-2">
        <div className="d-flex flex-column gap-2" style={{ minWidth: "300px" }}>
          <Menu />
          <Account />
        </div>
        <div style={{ width: "100%" }}>
          <div className="d-flex">
            <div
              onClick={handleOnClick}
              className="py-2 px-1"
              style={{ color: "#A0A0A0", cursor: "pointer" }}
            >
              <div>Danh sách thú cưng</div>
            </div>
            <div className="py-2 px-1" style={{ color: "#A0A0A0" }}>
              <div>&#62;</div>
            </div>
            <div className="py-2 px-1 fw-bold" style={{ color: "#098963" }}>
              <div>Tạo hồ sơ mới</div>
            </div>
          </div>
          <div
            className="rounded flex-column"
            style={{
              backgroundColor: "#FFFFFF",
              width: "100%",
            }}
          >
            <div
              className="d-flex justify-content-between rounded-top align-items-center"
              style={{
                width: "100%",
                height: "65px",
                backgroundColor: "#00C288",
              }}
            >
              <div className="px-4 py-2 fs-2 text-white fw-bold">
                HỒ SƠ THÚ CƯNG
              </div>
              <button className="btn btn-light border-0 fw-bold fs-5 px-4 mx-3">
                Theo dõi hằng ngày
              </button>
            </div>
            <div
              className="rounded-bottom px-3 py-2"
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
              <div className="mt-2">
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
              <div className="mt-2">
                <div className="fs-5">Sở thích:</div>
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
              <div className="mt-3">
                <div className="fs-5">Dinh dưỡng:</div>
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
              <div className="mt-3">
                <div className="fs-5">Tình trạng sức khoẻ:</div>
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
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-3">
                  <div className="mt-1 fs-5">Hình ảnh</div>
                  <button className="btn btn-secondary">Thêm</button>
                </div>
                <div className="d-flex gap-3">
                  <button
                    onClick={handleOnClick}
                    className="rounded fs-5 text-white "
                    style={{
                      border: "none",
                      backgroundColor: "#00C288",
                      height: "40px",
                      width: "150px",
                    }}
                  >
                    Xác nhận
                  </button>
                  <button
                    onClick={handleOnClick}
                    className="rounded fs-5 text-white "
                    style={{
                      border: "none",
                      backgroundColor: "#00C288",
                      height: "40px",
                      width: "150px",
                    }}
                  >
                    Huỷ
                  </button>
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
