// src/models/Customers.js
class Customers {
    constructor(customer_id, name, phone_number, email, password) {
      this.customer_id = customer_id;
      this.name = name;
      this.phone_number = phone_number;
      this.email = email;
      this.password = password;
    }
  
    addBooking(booking) {
      this.bookings.push(booking);
    }
  }
  