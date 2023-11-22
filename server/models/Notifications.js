// src/models/Notifications.js
class Notifications {
  constructor(notification_id, booking_id, message, timestamp) {
    this.notification_id = notification_id;
    this.booking_id = booking_id;
    this.message = message;
    this.timestamp = timestamp;
  }

  sendAppNotification() {
    // Gửi thông báo
    console.log(`Sending app notification: ${this.message}`);
  }
}

export default Notifications;
