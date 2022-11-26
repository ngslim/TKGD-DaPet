import React from 'react';
import Header from '../../../components/HeaderAlt';
import Footer from '../../../components/Footer';
import Menu from '../../../components/Menu';
import { useNavigate } from 'react-router-dom';

function Summary() {
  const navigate = useNavigate();

  const handleOnClickBook = () => {
    navigate('/book');
  };

  const handleOnClickLocation = () => {
    navigate('/book/location');
  };

  return (
    <div style={{ background: '#f3f3f3' }}>
      <Header />
      <div className="d-flex p-2 gap-2">
        <div className="d-flex flex-column gap-2" style={{ minWidth: '300px' }}>
          <Menu />
        </div>
        <div style={{ width: '100%' }}>
          <div className="d-flex">
            <div className="py-2 px-1" style={{ color: '#A0A0A0' }}>
              <div>Đăng ký khám</div>
            </div>
            <div className="py-2 px-1" style={{ color: '#A0A0A0' }}>
              <div>&#62;</div>
            </div>
            <div
              onClick={handleOnClickBook}
              className="py-2 px-1"
              style={{ color: '#A0A0A0', cursor: 'pointer' }}>
              <div>Nhập thông tin</div>
            </div>
            <div className="py-2 px-1" style={{ color: '#A0A0A0' }}>
              <div>&#62;</div>
            </div>
            <div
              onClick={handleOnClickLocation}
              className="py-2 px-1"
              style={{ color: '#A0A0A0', cursor: 'pointer' }}>
              <div>Chọn phòng khám</div>
            </div>
            <div className="py-2 px-1" style={{ color: '#A0A0A0' }}>
              <div>&#62;</div>
            </div>
            <div className="py-2 px-1 fw-bold" style={{ color: '#098963' }}>
              <div>Thông tin lịch khám</div>
            </div>
          </div>
          <div
            className="rounded d-flex flex-column"
            style={{
              backgroundColor: '#FFFFFF',
              width: '100%',
            }}>
            <div
              className="rounded align-items-center"
              style={{
                width: '100%',
                height: 'auto',
                backgroundColor: '#00C288',
              }}>
              <div className="px-4 py-2 fs-2 text-white fw-bold">
                THÔNG TIN LỊCH KHÁM
              </div>
              <div className="d-flex gap-3 px-3 pb-3">
                <div className="bg-white p-3 rounded" style={{ width: '30%' }}>
                  <div
                    className="mx-auto mb-4 mt-4"
                    style={{
                      width: '150px',
                      height: '150px',
                      backgroundColor: '#D9D9D9',
                      borderRadius: '75px',
                    }}></div>
                  <div>
                    <div className="d-flex gap-5 py-2 justify-content-between">
                      <div className="fw-light">Họ và tên:</div>
                      <div className="fw-bold">Nguyễn Văn A</div>
                    </div>
                    <div className="d-flex gap-5 py-2 justify-content-between">
                      <div className="fw-light">SĐT:</div>
                      <div className="fw-bold">0123456789</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded flex-fill">
                  <div className="mt-2 mx-2">
                    <div className="fs-5">Vật nuôi</div>
                    <div className="fs-5 fw-bold">Mèo</div>
                  </div>
                  <div className="mt-2 mx-2">
                    <div className="fs-5">Triệu chứng</div>
                    <div className="fs-5 fw-bold">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </div>
                  </div>
                  <div className="mt-2 mx-2">
                    <div className="fs-5">Phòng khám</div>
                    <div className="fs-5 fw-bold">Lorem ipsum dolor</div>
                  </div>
                  <div className="mt-2 mx-2">
                    <div className="fs-5">Bác sĩ</div>
                    <div className="fs-5 fw-bold">Trần Văn B</div>
                  </div>
                  <div className="mt-2 mx-2">
                    <div className="fs-5">Thời gian</div>
                    <div className="fs-5 fw-bold">16:00 13/11/2022</div>
                  </div>
                  <div className="mt-2 mx-2">
                    <div className="fs-5">Chú thích</div>
                    <div className="fs-5 fw-bold">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end p-3">
                <button
                  className="rounded fs-5 fw-semibold"
                  style={{
                    color: '#06BA64',
                    border: 'none',
                    backgroundColor: 'white',
                    height: '60px',
                    width: '250px',
                  }}>
                  Xác nhận
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

export default Summary;
