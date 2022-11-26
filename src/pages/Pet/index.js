import React from 'react';
import Header from '../../components/HeaderAlt';
import Account from '../../components/Account';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import { useNavigate } from 'react-router-dom';

function Pet() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/pet/add');
  };

  return (
    <div style={{ background: '#f3f3f3' }}>
      <Header />
      <div className="d-flex p-2 gap-2">
        <div className="d-flex flex-column gap-2" style={{ minWidth: '300px' }}>
          <Menu />
          <Account />
        </div>
        <div style={{ width: '100%' }}>
          <div className="d-flex">
            <div className="py-2 px-1 fw-bold" style={{ color: '#098963' }}>
              <div>Danh sách thú cưng</div>
            </div>
          </div>
          <div
            className="rounded flex-column"
            style={{
              backgroundColor: '#FFFFFF',
              width: '100%',
            }}>
            <div
              className="d-flex justify-content-between rounded-top align-items-center"
              style={{
                width: '100%',
                height: '65px',
                backgroundColor: '#00C288',
              }}>
              <div className="px-4 py-2 fs-2 text-white fw-bold">
                DANH SÁCH THÚ CƯNG
              </div>
              <button
                onClick={handleOnClick}
                className="btn btn-light border-0 fw-bold fs-5 px-4 mx-3">
                Tạo hồ sơ
              </button>
            </div>
            <div
              className="rounded-bottom p-4"
              style={{
                width: '100%',
                backgroundColor: 'white',
              }}>
              <div
                className=""
                style={{
                  display: 'grid',
                  gridTemplateRows: 'repeat(2, calc(100%/2))',
                  gap: '16px',
                }}>
                <div className="">
                  <div
                    className="rounded-top"
                    style={{
                      width: '100%',
                      minHeight: '220px',
                      backgroundColor: '#bce1d6',
                    }}></div>
                  <div
                    className="px-3 gap-3 d-flex rounded-bottom justify-content-around align-items-center"
                    style={{
                      width: '100%',
                      minHeight: '64px',
                      backgroundColor: '#00C288',
                    }}>
                    <div className="p-2 flex-column">
                      <div className="text-white fw-semibold">Tên thú cưng</div>
                      <div className="text-white">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                      </div>
                    </div>
                    <button
                      className="btn btn-light py-2 fw-bold"
                      style={{ width: '140px' }}>
                      Theo dõi
                    </button>
                    <button
                      className="btn btn-light py-2 fw-bold"
                      style={{ width: '140px' }}>
                      Lịch sử khám
                    </button>
                  </div>
                </div>
                <div className="">
                  <div
                    className="rounded-top"
                    style={{
                      width: '100%',
                      minHeight: '220px',
                      backgroundColor: '#bce1d6',
                    }}></div>
                  <div
                    className="px-3 gap-3 d-flex rounded-bottom justify-content-around align-items-center"
                    style={{
                      width: '100%',
                      minHeight: '64px',
                      backgroundColor: '#00C288',
                    }}>
                    <div className="p-2 flex-column">
                      <div className="text-white fw-semibold">Tên thú cưng</div>
                      <div className="text-white">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                      </div>
                    </div>
                    <button
                      className="btn btn-light py-2 fw-bold"
                      style={{ width: '140px' }}>
                      Theo dõi
                    </button>
                    <button
                      className="btn btn-light py-2 fw-bold"
                      style={{ width: '140px' }}>
                      Lịch sử khám
                    </button>
                  </div>
                </div>
              </div>
              <div class="d-flex gap-1 justify-content-center mt-4">
                <button
                  className="btn btn-light"
                  style={{ width: '40px', height: '40px' }}>
                  1
                </button>
                <button
                  className="btn btn-light"
                  style={{ width: '40px', height: '40px' }}>
                  2
                </button>
                <button
                  className="btn btn-light"
                  style={{ width: '40px', height: '40px' }}>
                  3
                </button>
                <button
                  className="btn btn-light"
                  style={{ width: '40px', height: '40px' }}>
                  4
                </button>
                <button
                  className="btn btn-light"
                  style={{ width: '40px', height: '40px' }}>
                  5
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

export default Pet;
