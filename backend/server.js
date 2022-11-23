const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Express gooooo</h1>
    <span></span>
  `);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}! Yasss`);
});