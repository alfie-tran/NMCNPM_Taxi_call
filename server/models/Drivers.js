// src/models/Drivers.js
import User from './User';

class Drivers extends User {
  constructor(driver_id, name, phone_number, license_number, avatar) {
    // Gọi hàm khởi tạo của lớp cha (User)
    super(driver_id, name, phone_number);

    // Thêm các thuộc tính mới của lớp Drivers
    this.licenseNumber = license_number;
    this.avatar = avatar;
    this.ratings = [];
    this.bookings = [];
  }

  // Phương thức xác nhận đơn đặt xe
  confirmBooking(booking) {
    // Xác nhận đơn đặt xe
    console.log(`Booking ${booking.booking_id} confirmed by driver ${this.driver_id}.`);
    // Cập nhật trạng thái của đơn đặt xe
    booking.confirmBooking();
  }

  // Phương thức hủy đơn đặt xe
  cancelBooking(booking) {
    // Hủy đơn đặt xe
    console.log(`Booking ${booking.booking_id} cancelled by driver ${this.driver_id}.`);
    // Cập nhật trạng thái của đơn đặt xe
    booking.cancelBooking();
  }
}

export default Drivers;
