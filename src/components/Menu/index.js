import React from 'react';
import {
  BsPerson,
  BsPencil,
  BsShopWindow,
  BsQuestionSquare,
} from 'react-icons/bs';

function Menu() {
  return (
    <div className="bg-white p-3 rounded">
      <div className="d-flex gap-3 align-items-center py-2 px-3">
        <BsPerson />
        <div className="fw-semibold px-2">Thông tin cá nhân</div>
      </div>
      <div className="d-flex gap-3 align-items-center py-2 px-3">
        <BsPencil color="#098963" />
        <div className="fw-bold px-2" style={{ color: '#098963' }}>
          Đăng ký khám
        </div>
      </div>
      <div className="d-flex gap-3 align-items-center py-2 px-3">
        <BsShopWindow />
        <div className="fw-semibold px-2">Tìm kiếm cơ sở khám</div>
      </div>
      <div className="d-flex gap-3 align-items-center py-2 px-3">
        <BsQuestionSquare />
        <div className="fw-semibold px-2">Hỏi đáp</div>
      </div>
    </div>
  );
}

Menu.propTypes = {};

export default Menu;
