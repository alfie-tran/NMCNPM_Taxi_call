// RideDetails.js
import React from 'react';

const RideDetails = ({ ride, onConfirmPickup, onCancelRide, onViewMap }) => {
  return (
    <div>
      <h2>Thông tin chuyến đi</h2>
      <div>
        <p>Điểm đón: {ride.destination}</p>
        <p>Khoảng cách: {ride.distance} km</p>
        <p>Điểm đến: {ride.customerDestination}</p>
        {/* Add more ride details as needed */}
      </div>

      <button onClick={onConfirmPickup}>Chọn chuyến đi này</button>
      <button onClick={onCancelRide}>Quay về danh sách</button>
      <button onClick={onViewMap}>Xem bản đồ</button>
    </div>
  );
};

export default RideDetails;
