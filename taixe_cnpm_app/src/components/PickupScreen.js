// PickupScreen.js
import React from 'react';

const PickupScreen = ({ ride, onConfirmPickup, onCancelRide }) => {
  return (
    <div>
      <h2>Màn hình chuyến đi đã nhận</h2>
      <div>
        <p>Điểm đón: {ride.destination}</p>
        {/* Add more ride details as needed */}
      </div>

      <button onClick={onConfirmPickup}>Xác nhận đã đón khách</button>
      <button onClick={onCancelRide}>Hủy chuyến</button>

      {/* Display customer information */}
      <div>
        <h3>Thông tin khách hàng</h3>
        <p>Tên: {ride.customerName}</p>
        <p>Số điện thoại: {ride.customerPhone}</p>
        <p>Điểm đến: {ride.customerDestination}</p>
        {/* Add more customer information as needed */}
      </div>
    </div>
  );
};

export default PickupScreen;
