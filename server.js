const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from the Backend');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
