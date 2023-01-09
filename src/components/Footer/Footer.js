import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Footer.module.css";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className={classes["footer"]}>
      <div className={classes["footer-top"]}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className={classes["footer-info"]}>
                <h3>DAPET</h3>
                <p>
                  HCMUS - University of Science <br />
                  227 Nguyen Van Cu, Ward 4, District 5, Ho Chi Minh City
                  <br />
                  <br />
                  <strong>Phone:</strong> +84 373273575
                  <br />
                  <strong>Email:</strong> 19120260@student.hcmus.edu.vn
                  <br />
                </p>
                <div className={`${classes["social-links"]} mt-3`}>
                  <button>
                    <i className="fa-brands fa-twitter"></i>
                  </button>
                  <button>
                    <i className="fa-brands fa-facebook"></i>
                  </button>
                  <button>
                    <i className="fa-brands fa-instagram"></i>
                  </button>
                  <button>
                    <i className="fa-brands fa-skype"></i>
                  </button>
                  <button>
                    <i className="fa-brands fa-linkedin"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className={`col-lg-2 col-md-6 ${classes["footer-links"]}`}>
              <h4>Liên kết</h4>
              <ul>
                <li onClick={(event) => navigate("/")}>
                  <i className="fa-solid fa-chevron-right"></i>{" "}
                  <button>Trang chủ</button>
                </li>
                <li onClick={(event) => navigate("/order")}>
                  <i className="fa-solid fa-chevron-right"></i>{" "}
                  <button>Phòng khám</button>
                </li>
                <li onClick={(event) => navigate("/book")}>
                  <i className="fa-solid fa-chevron-right"></i>{" "}
                  <button>Đặt lịch</button>
                </li>
                <li onClick={(event) => navigate("/pet")}>
                  <i className="fa-solid fa-chevron-right"></i>{" "}
                  <button>Thú cưng</button>
                </li>
              </ul>
            </div>

            <div
              className={`col-lg-4 col-md-6 offset-lg-3 offset-md-6 ${classes["footer-newsletter"]}`}
            >
              <h4>Thông báo</h4>
              <p>Kết nối với email của chúng tôi</p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
