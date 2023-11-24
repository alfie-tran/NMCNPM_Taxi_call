// PickupScreen.js
import React from 'react';

const PickupScreen = ({ ride, onConfirmPickup, onCancelRide }) => {
  return (
    <div>
      <h2>Màn hình chuyến đi đã nhận</h2>
      <div>
        <p>Điểm đón: {ride.destination}</p>
      </div>

      <button onClick={onConfirmPickup}>Xác nhận đã đón khách</button>
      <button onClick={onCancelRide}>Hủy chuyến</button>

      <div>
        <h3>Thông tin khách hàng</h3>
        <p>Tên: {ride.customerName}</p>
        <p>Số điện thoại: {ride.customerPhone}</p>
        <p>Điểm đến: {ride.customerDestination}</p>
      </div>
    </div>
  );
};

export default PickupScreen;
