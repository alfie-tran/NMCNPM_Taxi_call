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
              <h3>{ride.destination}</h3>
              <p>Khoảng cách: {ride.distance} km</p>
              <button onClick={() => onRideSelect(ride)}>Nhận chuyến đi</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RideLists;
