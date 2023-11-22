// src/models/Bookings.js
class Bookings {
  constructor(booking_id, driver_id, customer_id, pickup_location, dropoff_location, booking_time, status) {
    this.booking_id = booking_id;
    this.driver_id = driver_id;
    this.customer_id = customer_id;
    this.pickup_location = pickup_location;
    this.dropoff_location = dropoff_location;
    this.booking_time = booking_time;
    this.status = status;
    }

    broadcastToNextDriver() {
      // Gửi thông báo tới tài xế tiếp theo
      console.log(`Broadcasting booking ${this.booking_id} to the next available driver.`);
    }
  
    sendDriverInformationToCustomer() {
      // Gửi thông tin tài xế tới khách hàng
      console.log(`Sending driver information for booking ${this.booking_id} to the customer.`);
    }
  
    confirmBooking() {
      // Xác nhận đơn đặt xe
      this.status = 'Confirmed';
      console.log(`Booking ${this.booking_id} confirmed.`);
    }
  
    cancelBooking() {
      // Hủy đơn đặt xe
      this.status = 'Cancelled';
      console.log(`Booking ${this.booking_id} cancelled.`);
    }
  }
  export default Booking;