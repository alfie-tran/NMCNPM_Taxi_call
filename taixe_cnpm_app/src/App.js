// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DriverInfoScreen from './components/DriverInfoScreen';
import BookingInfoScreen from './components/BookingInfoScreen';
import FindRide from './components/FindRide';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Ứng dụng tài xế</h1>

        {/* Navigation links */}
        <nav>
          <ul>
            <li>
              <Link to="/driver">Tài xế</Link>
            </li>
            <li>
              <Link to="/booking">Lịch sử chuyến đi</Link>
            </li>
            <li>
              <Link to="/find">Tìm khách hàng</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/driver" element={<DriverInfoScreen />} />
          <Route path="/booking" element={<BookingInfoScreen />} />

          <Route path="/Find" element={<FindRide />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
