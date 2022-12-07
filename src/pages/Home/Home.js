import classes from "./Home.module.css";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Whyus from "../../components/Whyus/Whyus";
import SwiperClinic from "../../components/SwiperCustom/SwiperClinic/SwiperClinic";
import SwiperEvaluation from "../../components/SwiperCustom/SwiperEvaluation/SwiperEvaluation";
import Gallery from "../../components/Gallery/Gallery";
import GoogleMaps from "../../components/GoogleMaps/GoogleMaps";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const dataClinic = [
    {
      title: "Phòng khám Pet Joy",
      image: "./images/event-birthday.jpg",
      address: "53 Đặng Dung, Tân Định, Quận 1, Tp. HCM",
      description:
        "Bệnh viện thú y với trang thiết bị hiện đại, cấp cứu 24/24 với kỹ thuật liên tục cập nhật",
      feature: ["Mở cả ngày", "Giá bình dân", "Phòng khám chất lượng cao"],
      contact: "Conact info: 096 669 48 39",
    },
    {
      title: "Phòng khám Pet Farm",
      image: "./images/event-custom.jpg",
      address: "366 Đường Cây Trâm, Phường 8, Q. Gò Vấp, Tp. HCM",
      description:
        "Phòng khám sạch sẽ, dịch vụ tốt, bác sĩ tận tâm",
      feature: ["Phòng khám sạch sẽ", "Điều trị phẫu thuật", "Trông nom thú cưng"],
      contact: "Contact info: 090 983 67 77",
    },
    {
      title: "Phòng khám Family Bean",
      image: "./images/event-private.jpg",
      address: "46C Lê Hồng Phong, Phường 2, Quận 5, Tp. HCM",
      description:
        "Bệnh viện thú y Family Bean chuyên phẫu thuật, điều trị và dịch vụ tại nhà đi kèm (bao gồm: chích ngừa, tẩy giun, triệt sản,...)",
      feature: ["Dịch vụ tại nhà", "Điều trị phẫu thuật", "Siêu âm, xét nghiệm"],
      contact: "Contact info: 0844 951 951",
    },
  ];

  const dataEvaluation = [
    {
      comment:
        "Website đưa đến trải nghiệm rất tuyệt vời. Nhờ có chức năng quản lí hồ sơ thú cưng mà mỗi khi cần khám chữa bệnh, tôi không cần phải báo cáo về các bệnh tình của bé khi gặp bác sĩ",
      name: "Ngoc Nguyen",
      image: "./images/testimonials/testimonials-1.jpg",
      position: "Sinh Viên",
    },
    {
      comment:
        "Đặt lịch hẹn khám rất tiện, cơ sở khám tiếp nhận rất nhanh. Tôi sẽ còn sử dụng dịch vụ này dài dài.",
      name: "Do Hoang Quan",
      image: "./images/testimonials/testimonials-1.jpg",
      position: "Nhân viên văn phòng",
    },
    {
      comment:
        "Tuy quá trình đăng ký và tạo hồ sơ có hơi bất tiện và mất thời gian. Nhưng khi hồ sơ đã được lưu lại thì quá trình đặt lịch khám những lần tiếp theo diễn ra rất nhanh chóng. Khi đến khám bệnh vì đã đặt lịch khám trước và bác sĩ cũng đã nắm được tình trạng sức khoẻ của bé cưng nên quán trình khám và chữa bệnh diễn ra rất nhanh mà không phải chờ đợi",
      name: "Minh Phu Do",
      image: "./images/testimonials/testimonials-1.jpg",
      position: "Graphic Designer",
    },
    {
      comment:
        "Khách ruột của website. Nhà tôi nuôi 20 bé mèo và 10 bé chó. Mỗi lần đứa nào có bệnh thì rất mệt mõi. Nhiều khi hồ sơ khám bệnh của các bé cứ rối tung lên nên rất mất thời gian khi đi khám bệnh. Nhờ có website mà tôi theo dõi sức khoẻ cũng như đặt lịch khám dễ dàng hơn rất nhiều.",
      name: "Hanh Dung Dinh",
      image: "./images/testimonials/testimonials-1.jpg",
      position: "Youtuber",
    },
    {
      comment:
        "<3 <3 <3 DaPet",
      name: "Minh Tu Doan",
      image: "./images/testimonials/testimonials-1.jpg",
      position: "Hoc Sinh",
    },
  ];
  return (
    <div>
      <Header />
      <main className={classes["main"]}>
        <Banner />
        <Whyus />
        <SwiperClinic data={dataClinic} />
        <SwiperEvaluation data={dataEvaluation} />
        <Gallery />
        <GoogleMaps />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
