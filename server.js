const express = require('express');
const path = require('path')
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
})

app.get("styles.css", function(req,res) {
    res.sendFile(path.join(__dirname, "public/styles.css"));
})

app.get("index.js", function(req,res) {
    res.sendFile(path.join(__dirname, "public/index.js"));
})

const { getHighScores } = require('./controller')
const { addHighScore } = require('./controller')

app.get("/api/highscores", getHighScores);
app.post("/api/highscores", addHighScore);

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port}`));