// src/models/LocationTracking.js
class LocationTracking {
  constructor(driver) {
    this.driver = driver;
  }

  updateDriverLocation(latitude, longitude) {
    // Sử dụng dịch vụ định vị để cập nhật vị trí của tài xế
    const locationData = {
      latitude,
      longitude,
      timestamp: new Date(),
    };

    // Cập nhật vị trí của tài xế trong thông tin tài xế
    this.driver.updateLocation(locationData);

    // Cập nhật vị trí trong cơ sở dữ liệu hoặc thực hiện các hành động cần thiết khác
    console.log(`Driver ${this.driver.driver_id} location updated to ${latitude}, ${longitude}.`);
  }
}

export default LocationTracking;
