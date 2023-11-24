// ProgressRideScreen.js
import React from 'react';

const ProgressRideScreen = ({ ride, onConfirmProgress }) => {
  const { destination, customerDestination, distance } = ride;

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
      <h2>Màn hình chở khách</h2>
      <p><strong>Điểm đón:</strong> {destination}</p>
      <p><strong>Điểm đến:</strong> {customerDestination}</p>
      <p><strong>Thời gian ước lượng:</strong> {estimatedTime} phút</p>
      <p><strong>Số tiền ước lượng:</strong> {estimatedCost} VND</p>

      <button onClick={onConfirmProgress}>Hoành thành chuyến đi</button>
    </div>
  );
};

export default ProgressRideScreen;
