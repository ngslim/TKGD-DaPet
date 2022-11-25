import React from 'react';
import {
  BsPencil,
  BsCalendar,
  BsQuestionSquare,
  BsClockHistory,
} from 'react-icons/bs';

function DoctorMenu() {
  return (
    <div className="bg-white p-3 rounded">
      <div className="d-flex gap-3 align-items-center py-2 px-3">
        <BsPencil color="#9A02B2" />
        <div className="fw-bold px-2" style={{ color: '#9A02B2' }}>
          Quản lý đơn khám
        </div>
      </div>
      <div className="d-flex gap-3 align-items-center py-2 px-3">
        <BsCalendar />
        <div className="fw-semibold px-2">Lịch trình</div>
      </div>
      <div className="d-flex gap-3 align-items-center py-2 px-3">
        <BsQuestionSquare />
        <div className="fw-semibold px-2">Tư vấn</div>
      </div>
      <div className="d-flex gap-3 align-items-center py-2 px-3">
        <BsClockHistory />
        <div className="fw-semibold px-2">Lịch sử</div>
      </div>
    </div>
  );
}

DoctorMenu.propTypes = {};

export default DoctorMenu;
