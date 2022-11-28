import express from 'express';

const app = express();
const PORT = process.env.port || 5000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Express </h1>
    <span></span>
    `);
});

app.listen(PORT, () => {
  console.log(`connected on ${PORT}`);
});
