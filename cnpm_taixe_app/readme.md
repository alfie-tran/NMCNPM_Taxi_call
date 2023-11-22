Bước 0: Tạo 2 thư mục public và src trong thư mục phát triển app của mình
```
NMCNPM_TAXI_CALL/
|-- cnpm_taixe_app/
|   |-- node_modules/
|   |-- public/
|   |   |-- index.html
|   |   |-- favicon.ico
|   |   |-- ...
|   |-- src/
|   |   |-- App.js
|   |   |-- index.js
|   |   |-- ...
|   |-- .gitignore
|   |-- package.json
|   |-- README.md
|-- server/
|   |-- node_modules/
|   |-- server.js
|   |-- package.json
|-- .gitignore
|-- package.json
|-- README.md
```
Bước 1: Tạo Dự Án React
Tạo Dự Án React:

Mở terminal và chạy lệnh sau để tạo một ứng dụng React mới:

```npx create-react-app my-react-app```
Chạy Ứng Dụng React:

Di chuyển vào thư mục dự án:

```cd my-react-app```
Chạy ứng dụng React:

```npm start```

Ứng dụng sẽ mở trình duyệt và hiển thị trang web mặc định.

Bước 2: Tạo Server Node.js
Tạo Thư Mục Server:
Trong thư mục gốc của dự án, tạo một thư mục mới cho server:

```mkdir server```
Khởi Tạo Dự Án Node.js:

Trong thư mục server, chạy lệnh sau để khởi tạo một dự án Node.js:


```npm init -y```
Cài Đặt Express:

Cài đặt Express để tạo server:

```npm install express```
Tạo File server.js:

Trong thư mục server, tạo một file server.js và định nghĩa một server đơn giản:
```
const express = require('express');
const app = express();
const port = 5000;

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

Bước 3: Tích Hợp React với Server
Gọi API từ React:

Trong ứng dụng React (src/App.js hoặc một component khác), sử dụng fetch hoặc thư viện như axios để gọi API từ server:
``` 
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
      <h1>React App</h1>
      <p>{data ? data.message : 'Loading...'}</p>
    </div>
  );
}

export default App;

```
Chạy Cả Hai Server và React:

Trong terminal, mở một cửa sổ mới và chạy server Node.js:

```cd server
node server.js
```
Mở một cửa sổ khác và chạy ứng dụng React:

```cd my-react-app
npm start
```
Ứng dụng React sẽ chạy trên http://localhost:3000, và server Node.js sẽ chạy trên http://localhost:5000.