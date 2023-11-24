// CompletedRideScreen.js
import React from 'react';

const CompletedRideScreen = ({ ride, onConfirmCompleted, onViewReceipt, onReturnToRideList }) => {
  const { distance } = ride;

    const calculateEstimatedTime = () => {
      // Giả sử mỗi km mất 5 phút (cần thay đổi theo yêu cầu thực tế)
      const timePerKm = 5;
      return distance * timePerKm;
    };
  
    const calculateEstimatedCost = () => {
      // Giả sử giá cả là 10,000 VND/km (cần thay đổi theo yêu cầu thực tế)
      const costPerKm = 10000;
      return distance * costPerKm;
    };
  
    const estimatedTime = calculateEstimatedTime();
    const estimatedCost = calculateEstimatedCost();
  return (
    <div>
      <h2>Màn hình kết thúc chuyến đi</h2>
      <div>
        <p>Điểm đón: {ride.destination}</p>
        <p>Quãng đường: {ride.distance} km</p>
        <p><strong>Thời gian di chuyển:</strong> {estimatedTime} phút</p>
        <p><strong>Số tiền nhận được:</strong> {estimatedCost} VND</p>
      </div>
      {/* <button onClick={onConfirmCompleted}>Xong chuyến</button> */}
      <button onClick={() => { onReturnToRideList(); }}>Kết thúc chuyến đi</button>
    </div>
  );
};

export default CompletedRideScreen;
