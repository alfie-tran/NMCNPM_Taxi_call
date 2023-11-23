// FindRide.js
import React, { useState, useEffect } from 'react';
import RideList from './RideLists';
import RideDetails from './RideDetails';
import PickupScreen from './PickupScreen';
import ProgressRideScreen from './ProgressRideScreen';

const FindRide = () => {
  const [rides, setRides] = useState([]); // Danh sách chuyến đi
  const [selectedRide, setSelectedRide] = useState(null); // Chuyến đi được chọn
  const [pickupConfirmed, setPickupConfirmed] = useState(false); // Trạng thái xác nhận đã đón
  const [rideProgress, setRideProgress] = useState(false); // Trạng thái chuyến đi đang tiến hành
  const [rideCompleted, setRideCompleted] = useState(false); // Trạng thái chuyến đi đã hoàn thành
  const [estimatedTime, setEstimatedTime] = useState(0);
  const [estimatedCost, setEstimatedCost] = useState(0);

  useEffect(() => {
    // Tính toán estimatedTime và estimatedCost khi selectedRide thay đổi
    if (selectedRide) {
      const timePerKm = 5; // Giả sử mỗi km mất 5 phút (cần điều chỉnh theo yêu cầu thực tế)
      const costPerKm = 10000; // Giả sử giá cả là 10,000 VND/km (cần điều chỉnh theo yêu cầu thực tế)
      const { distance } = selectedRide;

      const newEstimatedTime = distance * timePerKm;
      const newEstimatedCost = distance * costPerKm;

      setEstimatedTime(newEstimatedTime);
      setEstimatedCost(newEstimatedCost);
    }
  }, [selectedRide]);

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
    // setRideCompleted(false); // Reset the ride completion status
    
  };

  const handleConfirmPickup = () => {
    // Handle logic when the driver confirms pickup
    setPickupConfirmed(true);
    setRideProgress(true); // Reset the ride completion status
  };

  const handleCancelRide = () => {
    // Handle logic when the driver cancels the ride
    setSelectedRide(null);
    setPickupConfirmed(false);
    setRideCompleted(false);
    setRideProgress(false);
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

      {selectedRide && pickupConfirmed && !rideCompleted && !rideProgress && (
        <PickupScreen
          ride={selectedRide}
          onConfirmPickup={handleConfirmPickup}
          onCancelRide={handleCancelRide}
        />
      )}

      {selectedRide && (pickupConfirmed || rideCompleted) && rideProgress && (
        <ProgressRideScreen
          ride={selectedRide}
          estimatedTime={estimatedTime}
          estimatedCost={estimatedCost}
        />
      )}
    </div>
  );
};

export default FindRide;
