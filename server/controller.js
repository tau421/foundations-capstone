const highScores = [
    {
        "name": "Bill",
        "score": 1000
    },
    {
        "name": "Ted",
        "score": 3000
    },
    {
        "name": "Rufus",
        "score": 2000
    }
]

module.exports = {

    getHighScores: (req, res) => {
        let sortHighScores = highScores.sort((a,b) => b.score - a.score)
        res.status(200).send(sortHighScores);
    }

    ,

    addHighScore: (req, res) => {
        highScores.push(req.body)
        res.status(200).send(highScores)
    }
}