import React from 'react';

function DoctorAccount() {
  return (
    <div className="bg-white p-3 rounded">
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
          <div className="fw-light">Tên bác sĩ:</div>
          <div className="fw-bold">Nguyễn Văn A</div>
        </div>
        <div className="d-flex gap-5 py-2 justify-content-between">
          <div className="fw-light">Phòng khám:</div>
          <div className="fw-bold">Jio</div>
        </div>
        <div className="d-flex gap-5 py-2 justify-content-between">
          <div className="fw-light">Chức vụ:</div>
          <div className="fw-bold">Ngoại khoa</div>
        </div>
      </div>
      <div className="text-center mt-3 mx-auto mb-2">
        <button className="btn btn-secondary " style={{ width: '80px' }}>
          Sửa
        </button>
      </div>
    </div>
  );
}

export default DoctorAccount;
