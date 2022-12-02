const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.use(express.json());

const { getHighScores } = require('./controller')

app.get("/api/highscores", getHighScores);

app.listen(5500, () => console.log('Server running on 5500'));