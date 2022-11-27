// import classes from "./ProfileBook.module.css";

const ProfileBook = ({ user }) => {
  return (
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
  );
};

export default ProfileBook;
