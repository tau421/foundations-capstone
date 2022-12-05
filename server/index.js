const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.use(express.json());

const { getHighScores } = require('./controller')
const { addHighScore } = require('./controller')

app.get("/api/highscores", getHighScores);
app.post("/api/highscores", addHighScore);

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port}`));