// src/components/DriverInfoScreen.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DriverInfo from './DriverInfo';
import axios from 'axios';

const DriverInfoScreen = () => {
  const [driver, setDriver] = useState(null);
  const [driverError, setDriverError] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    axios.get('http://localhost:5000/api/drivers/1')
      .then(response => setDriver(response.data))
      .catch(error => {
        console.error('Error fetching driver data:', error);
        setDriverError(true);
      });
  }, []);

  // Function to navigate to the /driver route
  const goToDriverRoute = () => {
    navigate('/driver');
  };

  return (
    <div>
      <h1>Driver Information</h1>

      {driverError ? (
        <p>Error fetching driver data. Please try again later.</p>
      ) : driver ? (
        <>
          <DriverInfo
            driver_id={driver.driver_id}
            name={driver.name}
            phone_number={driver.phone_number}
            license_number={driver.license_number}
            avatar={driver.avatar}
          />
          <Link to="/driver">Go to Driver Info</Link>
          {/* Use the function to navigate to the /driver route */}
          <button onClick={goToDriverRoute}>Go to Driver Info</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DriverInfoScreen;
