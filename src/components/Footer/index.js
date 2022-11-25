import React from 'react';

function Footer() {
  return (
    <div>
      <div
        className="d-flex text-center justify-content-center align-items-center py-2"
        style={{ background: 'white' }}>
        <div className="fw-bold fs-3" style={{ fontFamily: 'Oswald' }}>
          DaPet
        </div>
      </div>
      <div
        className="d-flex text-center justify-content-center align-items-center"
        style={{ background: 'white' }}>
        <div className="fw-semilight fs-6">TKGD 2022</div>
      </div>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
