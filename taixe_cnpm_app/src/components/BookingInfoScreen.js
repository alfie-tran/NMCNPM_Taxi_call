// src/components/BookingInfoScreen.js
import React, { useEffect, useState } from 'react';
import BookingInfo from './BookingInfo';
import axios from 'axios';

const BookingInfoScreen = () => {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    // Fetch dữ liệu booking từ API
    axios.get('http://localhost:5000/api/bookings/1') // Thay '1' bằng booking_id thực tế
      .then(response => setBooking(response.data))
      .catch(error => console.error('Error fetching booking data:', error));
  }, []);

  return (
    <div>
      <h1>Booking Information</h1>
      {booking ? (
        <BookingInfo
          booking_id={booking.booking_id}
          driver_id={booking.driver_id}
          customer_id={booking.customer_id}
          pickup_location={booking.pickup_location}
          dropoff_location={booking.dropoff_location}
          booking_time={booking.booking_time}
          status={booking.status}
        />
      ) : (
        <p>Loading...</p>
      )}

      <Link to="/driver">Go to Booking Info</Link>
      
    </div>
  );
};

export default BookingInfoScreen;
