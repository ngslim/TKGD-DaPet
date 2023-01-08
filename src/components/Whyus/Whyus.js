import { useNavigate } from "react-router-dom";
import { useAuthState } from "../../context/authentication";
import SpecialItem from "./SpecialItem/SpecialItem";
import classes from "./Whyus.module.css";

const Whyus = () => {
  const authState = useAuthState();

  const bockAppointment =
    "Không cần mất nhiều thời gian để tìm kiếm địa chỉ phòng khám thú cưng từ nhiều nguồn khác nhau vì đã có DaPet đề xuất và đánh giá.";

  const navigate = useNavigate();

  const reciveOrder =
    "Đơn khám sẽ được gửi ngay đến phòng khám và được lên lịch hẹn cho người dùng một cách nhanh chóng";

  const petManager =
    "Thú cưng sẽ được lập hồ sơ riêng để người dùng thuận tiện theo dõi";

  const gotoBookHandler = () => {
    navigate("/book");
  };

  const gotoOrderHandler = () => {
    if (!authState.state) {
      alert("Bạn cần đăng nhập để dùng tính năng này!");
      return;
    } else {
      navigate("/order");
    }
  };

  const gotoPetHandler = () => {
    if (!authState.state) {
      alert("Bạn cần đăng nhập để dùng tính năng này!");
      return;
    } else {
      navigate("/pet");
    }
  };

  return (
    <section className={classes["why-us"]}>
      <div className="container">
        <div className={classes["section-title"]}>
          <h2>Why Us</h2>
          <p>Vì sao nên sử dụng DaPet</p>
        </div>

        <div className="row">
          <SpecialItem
            number={1}
            title="Đặt Lịch Khám"
            text={bockAppointment}
            onClick={gotoBookHandler}
          />
          <SpecialItem
            number={2}
            title="Nhận Đơn Khám"
            text={reciveOrder}
            onClick={gotoOrderHandler}
          />
          <SpecialItem
            number={3}
            title="Quản Lý Thú Cưng"
            text={petManager}
            onClick={gotoPetHandler}
          />
        </div>
      </div>
    </section>
  );
};

export default Whyus;
