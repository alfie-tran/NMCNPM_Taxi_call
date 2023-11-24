// RideLists.js
import React from 'react';
import '../css/RideLists.css';

const RideLists = ({ rides, onRideSelect }) => {
  return (
    <div className="ride-list-container">
      <h2>Những chuyến đi khả dụng</h2>
      <ul className="ride-list">
        {rides.map((ride) => (
          <li key={ride.id} className="ride-item">
            <div className="ride-details">
              <p className="destination">{ride.destination}</p>
              <p>Khoảng cách: {ride.distance} km</p>
              <p>Điểm đến: {ride.customerDestination}</p>
              <button onClick={() => onRideSelect(ride)}>Nhận chuyến đi</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RideLists;
