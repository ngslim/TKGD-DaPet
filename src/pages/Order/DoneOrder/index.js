import React from 'react';
// import PropTypes from "prop-types";

function DoneOrder() {
  return (
    <div>
      <div>
        <div className="py-2 px-1 fw-bold" style={{ color: '#9A02B2' }}>
          <div>Lịch trình</div>
        </div>
      </div>
      <div
        className="rounded"
        style={{
          backgroundColor: '#FFFFFF',
          width: '100%',
          padding: '8px',
        }}>
        <div
          className="py-2 px-3 text-white rounded d-flex flex-column gap-2"
          style={{ backgroundColor: '#9A02B2' }}>
          <div
            className="d-flex gap-3 align-items-center"
            style={{ backgroundColor: '#9A02B2' }}>
            <div className="fs-4 fw-bolder">Lịch trình vừa nhận</div>
            <button className="btn btn-light fw-bold">16:00 13/11/2022</button>
          </div>
          <div className="fw-light d-flex gap-5">
            <div className="d-flex gap-3">
              Tên thú: <b className="fw-bold">Bánh bao</b>
            </div>
            <div className="d-flex gap-3">
              Loại thú: <b className="fw-bold">Mèo</b>
            </div>
          </div>
          <div className="fw-light d-flex gap-3">
            Tên chủ: <b className="fw-bold">Nguyễn Văn A</b>
          </div>
          <div className="fw-light d-flex gap-3">
            SĐT: <b className="fw-bold">0123456789</b>
          </div>
          <div className="fw-light d-flex gap-3">
            Địa chỉ:{' '}
            <b className="fw-bold">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </b>
          </div>
          <div>
            <div>Triệu chứng</div>
            <div className="fw-bold">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </div>
          </div>
          <div>
            <div>Chú thích</div>
            <div className="fw-bold">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </div>
          </div>
        </div>
        <div
          className="rounded mt-2"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(9, calc(100%/9))',
          }}>
          <div
            className="d-flex align-items-center justify-content-center rounded-start"
            style={{ backgroundColor: '#9A02B2', height: '350px' }}>
            <div
              class="fw-bold text-white"
              style={{
                transform: 'rotate(-90deg)',
                fontSize: '30px',
              }}>
              November
            </div>
          </div>
          <div
            style={{
              backgroundColor: '#E6E6E6',
              position: 'relative',
              borderRight: '2px solid #ABABAB',
            }}>
            <div
              className="p-2"
              style={{
                backgroundColor: '#CFCFCF',
              }}>
              <div className="fs-5 fw-bold">13</div>
              <div>Sun</div>
            </div>
            <div
              className="p-2"
              style={{
                backgroundColor: '#00C288',
                position: 'absolute',
                top: '60%',
                left: 0,
                right: 0,
              }}>
              <div className="fs-5 fw-bold">16:00</div>
              <div>Tiêu đề</div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: '#E6E6E6',
              position: 'relative',
              borderRight: '2px solid #ABABAB',
            }}>
            <div
              className="p-2"
              style={{
                backgroundColor: '#CFCFCF',
              }}>
              <div className="fs-5 fw-bold">14</div>
              <div>Mon</div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: '#E6E6E6',
              position: 'relative',
              borderRight: '2px solid #ABABAB',
            }}>
            <div
              className="p-2"
              style={{
                backgroundColor: '#CFCFCF',
              }}>
              <div className="fs-5 fw-bold">15</div>
              <div>Tue</div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: '#E6E6E6',
              position: 'relative',
              borderRight: '2px solid #ABABAB',
            }}>
            <div
              className="p-2"
              style={{
                backgroundColor: '#CFCFCF',
              }}>
              <div className="fs-5 fw-bold">16</div>
              <div>Wed</div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: '#E6E6E6',
              position: 'relative',
              borderRight: '2px solid #ABABAB',
            }}>
            <div
              className="p-2"
              style={{
                backgroundColor: '#CFCFCF',
              }}>
              <div className="fs-5 fw-bold">17</div>
              <div>Thu</div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: '#E6E6E6',
              position: 'relative',
              borderRight: '2px solid #ABABAB',
            }}>
            <div
              className="p-2"
              style={{
                backgroundColor: '#CFCFCF',
              }}>
              <div className="fs-5 fw-bold">18</div>
              <div>Fri</div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: '#E6E6E6',
              position: 'relative',
              borderRight: '2px solid #ABABAB',
            }}>
            <div
              className="p-2"
              style={{
                backgroundColor: '#CFCFCF',
              }}>
              <div className="fs-5 fw-bold">19</div>
              <div>Sat</div>
            </div>
          </div>
          <div
            className="rounded-end"
            style={{
              backgroundColor: '#E6E6E6',
              position: 'relative',
            }}>
            <div
              className="p-2"
              style={{
                backgroundColor: '#CFCFCF',
                borderTopRightRadius: '5px',
              }}>
              <div className="fs-5 fw-bold">20</div>
              <div>Sun</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoneOrder;
