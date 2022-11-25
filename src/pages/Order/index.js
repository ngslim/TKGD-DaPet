import React from 'react';
import DoctorAccount from '../../components/DoctorAccount';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DoctorMenu from '../../components/DoctorMenu';
import OrderList from './OrderList';
import OrderDetail from './OrderDetail';
import { useParams } from 'react-router-dom';

function Order() {
  const { id } = useParams();

  return (
    <div style={{ background: '#f3f3f3' }}>
      <Header />
      <div className="d-flex p-2 gap-2">
        <div className="d-flex flex-column gap-2" style={{ minWidth: '300px' }}>
          <DoctorMenu />
          <DoctorAccount />
        </div>
        {id ? <OrderDetail /> : <OrderList />}
      </div>
      <Footer />
    </div>
  );
}

export default Order;
