// FindRide.js
import React, { useState } from 'react';
import RideList from './RideLists';
import RideDetails from './RideDetails';

const FindRide = () => {
  const [rides, setRides] = useState([]); // Danh sách chuyến đi
  const [selectedRide, setSelectedRide] = useState(null); // Chuyến đi được chọn


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
    setSelectedRide(selectedRide);
  };

  const handleConfirmPickup = () => {
    // Handle logic when the driver confirms pickup
    console.log('Pickup confirmed');
  };

  const handleCancelRide = () => {
    // Handle logic when the driver cancels the ride
    console.log('Ride canceled');
  };

  const handleViewMap = () => {
    // Handle logic to view the map for the selected ride
    console.log('View map');
  };


  return (
    <div>
      <h2>Quản lý chuyến đi</h2>
      <p>Thông tin chuyến đi khách đặt tại đây..</p>
      
      <button onClick={handleFindRide}>Tìm chuyến đi</button>
      
      {rides.length > 0 && !selectedRide && <RideList rides={rides} onRideSelect={handleRideSelect} />}

      {selectedRide && (
        <RideDetails
          ride={selectedRide}
          onConfirmPickup={handleConfirmPickup}
          onCancelRide={handleCancelRide}
          onViewMap={handleViewMap}
        />
      )}

    </div>
  );
};

export default FindRide;
