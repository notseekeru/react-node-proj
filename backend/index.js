import express from 'express';

const backend = express();
const PORT = 3000;

backend.get('/', (req, res) => {
  res.send('Hello from Express backend!');
});

backend.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
