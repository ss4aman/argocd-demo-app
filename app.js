// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Argo CD & Cloud Deploy and PSO and Aman!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});