// RideDetails.js
import React from 'react';

const RideDetails = ({ ride, onConfirmPickup, onCancelRide, onViewMap }) => {
  return (
    <div>
      <h2>Ride Details</h2>
      <div>
        <p>Điểm đón: {ride.destination}</p>
        <p>Khoảng cách: {ride.distance} km</p>
        {/* Add more ride details as needed */}
      </div>

      <button onClick={onConfirmPickup}>Confirm Pickup</button>
      <button onClick={onCancelRide}>Cancel Ride</button>
      <button onClick={onViewMap}>View Map</button>
    </div>
  );
};

export default RideDetails;
