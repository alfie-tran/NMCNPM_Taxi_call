// src/components/BookingInfo.js
import React from 'react';

const BookingInfo = ({
  booking_id,
  driver_id,
  customer_id,
  pickup_location,
  dropoff_location,
  booking_time,
  status,
}) => {
  return (
    <div>
      <h2>Booking Details</h2>
      <p><strong>Booking ID:</strong> {booking_id}</p>
      <p><strong>Driver ID:</strong> {driver_id}</p>
      <p><strong>Customer ID:</strong> {customer_id}</p>
      <p><strong>Pickup Location:</strong> {pickup_location}</p>
      <p><strong>Dropoff Location:</strong> {dropoff_location}</p>
      <p><strong>Booking Time:</strong> {booking_time}</p>
      <p><strong>Status:</strong> {status}</p>
    </div>
  );
};

export default BookingInfo;
