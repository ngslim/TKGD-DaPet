import React from 'react';
import OrderDetail from '../../../components/OrderDetail';
import { useNavigate } from 'react-router-dom';

function OrderList() {
  const navigate = useNavigate();

  const orderList = [
    {
      name: 'Mèo',
      title: 'Tiêu đề',
      content:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
      date: '16:00 13/11/2022',
    },
    {
      name: 'Mèo',
      title: 'Tiêu đề',
      content:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
      date: '16:00 13/11/2022',
    },
    {
      name: 'Mèo',
      title: 'Tiêu đề',
      content:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
      date: '16:00 13/11/2022',
    },
    {
      name: 'Mèo',
      title: 'Tiêu đề',
      content:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
      date: '16:00 13/11/2022',
    },
    {
      name: 'Mèo',
      title: 'Tiêu đề',
      content:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
      date: '16:00 13/11/2022',
    },
    {
      name: 'Mèo',
      title: 'Tiêu đề',
      content:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
      date: '16:00 13/11/2022',
    },
  ];

  const handleOnClick = () => {
    navigate('/order/123');
  };

  return (
    <div>
      <div className="py-2 px-1 fw-bold" style={{ color: '#9A02B2' }}>
        <div>Quản lý đơn khám</div>
      </div>
      <div
        className="rounded"
        style={{
          backgroundColor: '#9A02B2',
          width: '100%',
          padding: '16px',
        }}>
        <div className="d-flex align-items-center justify-content-end gap-2 mb-3">
          <div className="fw-bold text-white">Sắp xếp theo</div>
          <select
            class="form-select"
            id="floatingSelect"
            style={{ width: 'fit-content' }}>
            <option selected>Thời gian</option>
          </select>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            gap: '16px',
          }}>
          {orderList.map((item, index) => (
            <div onClick={handleOnClick} style={{ cursor: 'pointer' }}>
              <OrderDetail
                key={index}
                name={item.name}
                title={item.title}
                content={item.content}
                date={item.date}
              />
            </div>
          ))}
        </div>
        <div class="d-flex gap-1 justify-content-center mt-4 mb-2">
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
  );
}

export default OrderList;
