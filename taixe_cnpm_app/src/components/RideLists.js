// RideLists.js
import React from 'react';

const RideLists = ({ rides, onRideSelect }) => {
  return (
    <div>
      <h2>Những chuyến đi khả dụng</h2>
      <ul>
        {rides.map((ride) => (
          <li key={ride.id}>
            <div>
              <p>{ride.destination}</p>
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
