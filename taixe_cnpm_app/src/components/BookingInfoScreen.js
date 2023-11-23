// src/components/BookingInfoScreen.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BookingInfo from './BookingInfo'; 
import axios from 'axios';

const BookingInfoScreen = () => {
  const [booking, setBooking] = useState(null);
  const [bookingError, setBookingError] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    axios.get('http://localhost:5000/api/bookings/1')
      .then(response => setBooking(response.data))
      .catch(error => {
        console.error('Error fetching booking data:', error);
        setBookingError(true);
      });
  }, []);

  // Function to navigate to the /driver route
  const goToDriverRoute = () => {
    navigate('/booking');
  };

  return (
    <div>
      <h1>Booking Information</h1>

      {bookingError ? (
        <p>Error fetching booking data. Please try again later.</p>
      ) : booking ? (
        <>
          <BookingInfo
            booking_id={booking.booking_id}
            driver_id={booking.driver_id}
            customer_id={booking.customer_id}
            pickup_location={booking.pickup_location}
            dropoff_location={booking.dropoff_location}
            booking_time={booking.booking_time}
            status={booking.status}
          />
          <Link to="/booking">Go to Booking Info</Link>
          {/* Use the function to navigate to the /driver route */}
          <button onClick={goToDriverRoute}>Go to Driver Info</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookingInfoScreen;
