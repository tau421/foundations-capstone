var score = 0

const getHighScoresBtn = document.getElementById('getHighScoresBtn')

const bigGreenImage = document.getElementById("bigGreenImage")
const powerScrubDeluxeImage = document.getElementById("powerScrubDeluxeImage")
const rugDoctorImage = document.getElementById("rugDoctorImage")

const carpet = document.getElementById("carpet")

const smallMessBtn = document.getElementById("smallMessBtn")
const mediumMessBtn = document.getElementById("mediumMessBtn")
const largeMessBtn = document.getElementById("largeMessBtn")

const makeSmallMess = () => {
    let visibleSmallMess = document.getElementsByClassName("redMess");
    for (i = 0; i < visibleSmallMess.length; i++) {
        if (visibleSmallMess[i].style.visibility != 'visible') {
            visibleSmallMess[i].style.visibility = 'visible';
        } else {
            visibleSmallMess[i].style.visibility = 'hidden'
        }
    }  
}

const makeMediumMess = () => {
    let visibleMediumMess = document.querySelectorAll(".redMess , .yellowMess");
    for (i = 0; i < visibleMediumMess.length; i++) {
        if (visibleMediumMess[i].style.visibility != 'visible') {
            visibleMediumMess[i].style.visibility = 'visible';
        } else {
            visibleMediumMess[i].style.visibility = 'hidden'
        }
    }
}

const makeLargeMess = () => {
    let visibleLargeMess = document.querySelectorAll(".redMess , .yellowMess , .brownMess");
    for (i = 0; i < visibleLargeMess.length; i++) {
        if (visibleLargeMess[i].style.visibility != 'visible') {
            visibleLargeMess[i].style.visibility = 'visible';
        } else {
            visibleLargeMess[i].style.visibility = 'hidden'
        }
    }
}

const getHighScores = () => {
    axios.get("http://localhost:5400/api/highscores/")
    .then(res => {
        let highScores = res.data
    })
}

const increaseScore = () => {
    score = score + 1000;
    var labelScore = document.getElementById('labelScore');
    labelScore.innerHTML = score;
}

const changeCursorBigGreen = () => {
    document.body.style.cursor = "url(https://i.ibb.co/9cdwNPg/big-Green-Cursor.png) 50 100, auto"
}
const changeCursorPowerScrubDeluxe = () => {
    document.body.style.cursor = "url(https://i.ibb.co/5Fg158s/power-Scrub-Deluxe100x100.png) 50 100, auto"
}
const changeCursorRugDoctor = () => {
    document.body.style.cursor = "url(https://i.ibb.co/hVYyHMs/rug-Doctor100x100.png) 50 100, auto"
}

bigGreenImage.addEventListener('click', changeCursorBigGreen)
powerScrubDeluxeImage.addEventListener('click', changeCursorPowerScrubDeluxe)
rugDoctorImage.addEventListener('click', changeCursorRugDoctor)

smallMessBtn.addEventListener('click', makeSmallMess)
mediumMessBtn.addEventListener('click', makeMediumMess)
largeMessBtn.addEventListener('click', makeLargeMess)

getHighScoresBtn.addEventListener('click', getHighScores)

