// CompletedRideScreen.js
import React from 'react';

const CompletedRideScreen = ({ ride, onConfirmCompleted }) => {
  // Giả sử giá tiền là 2 đơn vị cho mỗi km
  const fare = ride.distance * 2;

  return (
    <div>
      <h2>Completed Ride</h2>
      <div>
        <p>Destination: {ride.destination}</p>
        <p>Distance: {ride.distance} km</p>
        <p>Fare: ${fare}</p>
      </div>

      <button onClick={onConfirmCompleted}>Xong chuyến</button>
    </div>
  );
};

export default CompletedRideScreen;
