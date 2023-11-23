// src/components/DriverInfo.js
import React from 'react';

const DriverInfo = ({
  driver_id,
  name,
  phone_number,
  license_number,
  avatar,
}) => {
  return (
    <div>
      <h2>Driver Information</h2>
      <p><strong>Driver ID:</strong> {driver_id}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Phone Number:</strong> {phone_number}</p>
      <p><strong>License Number:</strong> {license_number}</p>
      <p><strong>Avatar:</strong> {avatar}</p>
    </div>
  );
};

export default DriverInfo;
