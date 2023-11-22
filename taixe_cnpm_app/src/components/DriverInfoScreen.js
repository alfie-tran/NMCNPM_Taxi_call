// src/components/DriverInfoScreen.js
import React, { useEffect, useState } from 'react';
import DriverInfo from './DriverInfoScreen';
import axios from 'axios';

const DriverInfoScreen = () => {
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    // Fetch dữ liệu tài xế từ API
    axios.get('http://localhost:5000/api/drivers/1') // Thay '1' bằng driver_id thực tế
      .then(response => setDriver(response.data))
      .catch(error => console.error('Error fetching driver data:', error));
  }, []);

  return (
    <div>
      <h1>Driver Information</h1>
      {driver ? (
        <DriverInfo
          driver_id={driver.driver_id}
          name={driver.name}
          phone_number={driver.phone_number}
          license_number={driver.license_number}
          avatar={driver.avatar}
        />
      ) : (
        <p>Loading...</p>
      )}
      
      <Link to="/driver">Go to Booking Info</Link>

    </div>
  );
};

export default DriverInfoScreen;
