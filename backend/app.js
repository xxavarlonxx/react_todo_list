const express = require('express');
const cors = require('cors');
const { urlencoded } = require('express');
require('dotenv').config();

const app = express();
app.use(
  cors({
    origin: 'http://localhost:3001',
  })
);
app.use(express.json());

app.use('/api/auth', require('./routes/Auth.route'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
