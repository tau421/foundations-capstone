const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.listen(5500, () => console.log('Server running on 5500'));