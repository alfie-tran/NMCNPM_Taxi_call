const express = require('express');
const app = express();
const port = 5000;

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
