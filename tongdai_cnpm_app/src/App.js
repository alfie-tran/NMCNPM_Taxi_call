// src/App.js
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>Xin chào các bạn</h1>
      <p>{data ? data.message : '21880291_21880273_21810052_22880138'}</p>
    </div>
  );
}

export default App;
