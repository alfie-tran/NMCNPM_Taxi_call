// FindRide.js
import React, { useState } from 'react';
import RideList from './RideLists';

const FindRide = () => {
  const [rides, setRides] = useState([]); // Danh sách chuyến đi

  const handleFindRide = () => {
    // Simulate fetching ride data from an API
    const fetchedRides = [
      { id: 1, destination: 'Số 1, đường Lý Lan, phường Tân Định, quận 1, Hcm', distance: 2 },
      { id: 2, destination: 'Số 120, đường 17, phường 2, quận 3, Hcm', distance: 5 },
      // Add more ride data as needed
    ];

    setRides(fetchedRides);
  };

  const handleRideSelect = (selectedRide) => {
    // Handle logic when a ride is selected
    console.log(`Ride selected: ${selectedRide.destination}`);
  };

  return (
    <div>
      <h2>Quản lý chuyến đi</h2>
      <p>Thông tin chuyến đi khách đặt tại đây..</p>
      
      <button onClick={handleFindRide}>Tìm chuyến đi</button>

      {rides.length > 0 && <RideList rides={rides} onRideSelect={handleRideSelect} />}
    </div>
  );
};

export default FindRide;
