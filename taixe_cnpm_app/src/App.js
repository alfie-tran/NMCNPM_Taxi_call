// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DriverInfo from './components/DriverInfoScreen';
import DriverInfo from './components/BookingInfoScreen';
import axios from 'axios';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Xin chào các bạn</h1>
        <Switch>
          <Route path="/driver" component={DriverInfoScreen} />
          <Route path="/booking" component={BookingInfoScreen} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;