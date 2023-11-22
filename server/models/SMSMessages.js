// src/models/SMSMessages.js
import Notifications from './Notifications';

class SMSMessages extends Notifications {
  sendSMS() {
    // Gửi thông báo qua SMS
    console.log(`Sending SMS to ${this.phone_number}: ${this.message}`);
  }
}

export default SMSMessages;
