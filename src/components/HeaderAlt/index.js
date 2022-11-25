import React from 'react';
import { BsSearch } from 'react-icons/bs';

function Header() {
  return (
    <div
      className="d-flex fs-5 text-center align-items-center bg-white"
      style={{ padding: '13px' }}>
      <div className="fw-bold fs-4 px-4" style={{ fontFamily: 'Oswald' }}>
        DaPet
      </div>
      <div className="px-3 fw-light">Trang chủ</div>
      <div className="px-3 fw-light">Khám bệnh</div>
      <div className="px-3 fw-light">Bài viết</div>
      <div
        className="border border-0 rounded fs-6 py-2 d-flex align-items-center justify-content-between px-4 me-3 ms-auto"
        style={{ width: '800px', backgroundColor: '#F3F3F3' }}>
        <input
          className="border-0"
          style={{
            outline: 'none',
            backgroundColor: 'transparent',
            placeholdercolor: '#A0A0A0',
          }}
          type="text"
          placeholder="chỗ khám bệnh uy tín"
        />
        <BsSearch color="#A0A0A0" />
      </div>
      <div class="d-flex px-3 align-items-center">
        <button
          className="rounded fs-5 text-white"
          style={{
            border: 'none',
            backgroundColor: '#00C288',
            height: '42px',
            width: '150px',
          }}>
          ĐĂNG NHẬP
        </button>
      </div>
    </div>
  );
}

export default Header;
