// FindRide.js
import React, { useState } from 'react';
import RideList from './RideLists';
import RideDetails from './RideDetails';
import PickupScreen from './PickupScreen';

const FindRide = () => {
  const [rides, setRides] = useState([]); // Danh sách chuyến đi
  const [selectedRide, setSelectedRide] = useState(null); // Chuyến đi được chọn
  const [pickupConfirmed, setPickupConfirmed] = useState(false); // Trạng thái xác nhận đã đón


  const handleFindRide = () => {
    // Simulate fetching ride data from an API
    const fetchedRides = [
      { id: 1, destination: 'Số 1, đường Lý Lan, phường Tân Định, quận 1, Hcm', distance: 2, customerName: 'Trần A', customerPhone: '0868680110', customerDestination: 'Số 30/12, đường Phạm Hiền, phường Hải Quân, quận 8, Hcm' },
    { id: 2, destination: 'Số 120, đường 17, phường 2, quận 3, Hcm', distance: 5, customerName: 'Tôn Nữ', customerPhone: '0868680110', customerDestination: '456 đường số 15, phường Tân Quy, quận 7, Hcm' },
      // Add more ride data as needed
    ];

    setRides(fetchedRides);
  };

  const handleRideSelect = (selectedRide) => {
    // Handle logic when a ride is selected
    setSelectedRide(selectedRide);
    setPickupConfirmed(false); // Reset the pickup confirmation status
  };

  const handleConfirmPickup = () => {
    // Handle logic when the driver confirms pickup
    setPickupConfirmed(true);
  };

  const handleCancelRide = () => {
    // Handle logic when the driver cancels the ride
    setSelectedRide(null);
    setPickupConfirmed(false);
  };

  const handleViewMap = () => {
    // Handle logic to view the map for the selected ride
    console.log('View map');
  };


  return (
    <div>
      <h1>Màn hình tìm khách hàng</h1>
      <p>Vị trí hiện tại: ...</p>
      
      <button onClick={handleFindRide}>Tìm chuyến đi</button>
      
      {rides.length > 0 && !selectedRide && <RideList rides={rides} onRideSelect={handleRideSelect} />}

      {selectedRide && !pickupConfirmed && (
        <RideDetails
          ride={selectedRide}
          onConfirmPickup={handleConfirmPickup}
          onCancelRide={handleCancelRide}
          onViewMap={handleViewMap}
        />
      )}

      {selectedRide && pickupConfirmed && (
        <PickupScreen
          ride={selectedRide}
          onConfirmPickup={handleConfirmPickup}
          onCancelRide={handleCancelRide}
        />
      )}

    </div>
  );
};

export default FindRide;
