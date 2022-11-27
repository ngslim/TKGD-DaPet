import classes from "./HomePage.module.css";
// import Header from "../../components/Header/Header";

const HomePage = () => {
  return (
    <div>
      {/* <Header /> */}
      <div
        className={`${classes["container-fluid"]} p-4 text-white text-center`}
      >
        <h1 className={classes["title-head"]}>
          Thú cưng của bạn đang gặp vấn đề gì?
        </h1>
        <form className={classes["form-container"]}>
          <input
            className={classes["form-input-styling"]}
            type="text"
            placeholder="Bệnh liên quan đến tiêu hoá?"
            name="search2"
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className={`${classes["background2"]} p-5`}>
        <div className={classes["font2"]}>
          Bạn muốn đăng ký khám bệnh cho thú cưng?
        </div>
        <button className={classes["button"]}>Đăng Ký</button>
      </div>
      <div className={`${classes["container-fluid"]} p-5 text-white`}>
        <div className={classes["row"]}>
          <div className={`${classes["column"]} ${classes["my-service"]}`}>
            Dịch vụ của <br />
            chúng tôi
          </div>
          <div className={`${classes["column"]} ${classes["list-selection"]}`}>
            <button className={classes["btn"]}>
              <i className=""></i>1
            </button>
            <br />
            <button className={classes["btn"]}>
              <i className=""></i>2
            </button>
            <br />
            <button className={classes["btn"]}>
              <i className=""></i>3
            </button>
          </div>
          <div
            className={`${classes["column"]} ${classes["container-create-profile"]}`}
          >
            <div className={classes["create-profile"]}>
              Tạo hồ sơ quản lý sức khoẻ thú cưng
            </div>
            <div className={classes["create-profile-description"]}>
              Chúng tôi cung cấp cho khách hàng khả năng tạo hồ sơ quản lý sức
              khoẻ cho thú cưng để dễ dàng lưu trữ lại thông tin cũng như cho
              các cơ sở thú y dễ dàng truy cập thông tin sức khoẻ vật nuôi khi
              thăm khám.
              <button
                href="https://www.w3schools.com/"
                className={classes["btn-link"]}
              >
                Xem Thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
