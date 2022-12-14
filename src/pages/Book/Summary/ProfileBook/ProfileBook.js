// import classes from "./ProfileBook.module.css";
import { dataCustomer } from "../../../../mock/book-data";

const ProfileBook = ({ user }) => {
  return (
    <div>
      <div className="d-flex gap-5 py-2 justify-content-between">
        <div className="fw-light">Họ và tên:</div>
        <div className="fw-bold">{dataCustomer[0].name}</div>
      </div>
      <div className="d-flex gap-5 py-2 justify-content-between">
        <div className="fw-light">SĐT:</div>
        <div className="fw-bold">{dataCustomer[0].telephone}</div>
      </div>
    </div>
  );
};

export default ProfileBook;
