import React from 'react';
import { useNavigate } from 'react-router-dom';

function Order(props) {
  const navigate = useNavigate();
  const { onClick } = props;

  const handleOnClickOrderList = () => {
    navigate('/order');
  };
  return (
    <div>
      <div className="d-flex">
        <div
          className="py-2 px-1"
          onClick={handleOnClickOrderList}
          style={{ color: '#A0A0A0', cursor: 'pointer' }}>
          <div>Quản lý đơn khám</div>
        </div>
        <div className="py-2 px-1" style={{ color: '#A0A0A0' }}>
          <div>&#62;</div>
        </div>
        <div className="py-2 px-1 fw-bold" style={{ color: '#9A02B2' }}>
          <div>Thông tin đơn khám</div>
        </div>
      </div>
      <div
        className="rounded"
        style={{
          backgroundColor: '#FFFFFF',
          width: '100%',
          padding: '16px',
        }}>
        <div className="d-flex gap-3 mb-2 align-items-center">
          <div className="fs-4 fw-bolder">Tiêu đề</div>
          <button
            className="btn text-white fw-bold"
            style={{ backgroundColor: '#9A02B2' }}>
            Chưa được nhận
          </button>
        </div>
        <div
          className="py-2 px-3 text-white rounded d-flex flex-column gap-3"
          style={{ backgroundColor: '#9A02B2' }}>
          <div className="fs-5 fw-bolder">Thông tin liên hệ</div>
          <div className="fw-light">
            SĐT: <b className="fw-bold">0123456789</b>
          </div>
          <div className="fw-light">
            Địa chỉ:{' '}
            <b className="fw-bold">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </b>
          </div>
          <div className="fw-light">
            E-mail: <b className="fw-bold">petowner@gmail.com</b>
          </div>
          <div className="fw-light">
            Thời gian đặt lịch: <b className="fw-bold">16:00 13/11/2022</b>
          </div>
          <div className="d-flex justify-content-end gap-4 mb-2">
            <button className="btn btn-light" style={{ width: '120px' }}>
              Liên hệ
            </button>
          </div>
        </div>
        <div className="py-2 px-1 rounded d-flex flex-column gap-2 mt-2">
          <div className="fs-5 fw-bolder">Thông tin vật nuôi</div>
          <div>
            <div>Vật nuôi:</div>
            <div className="fw-bold">Mèo</div>
          </div>
          <div>
            <div>Giới tính:</div>
            <div className="fw-bold">Nam</div>
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
        <div className="d-flex justify-content-end gap-4 mt-2">
          <button
            className="btn btn-secondary"
            style={{ width: '120px' }}
            onClick={onClick}>
            Nhận đơn
          </button>
          <button className="btn btn-secondary" style={{ width: '120px' }}>
            Huỷ đơn
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
