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

const redSoap1 = () => {
    document.getElementById("carpet1").innerHTML = '<img src="https://i.ibb.co/KbrKJTR/red-Soap-transparent.png" alt="red-Soap-transparent" id="redSoap1" onclick="cleanCarpet1()">'
    increaseScore()
}
const redSoap4 = () => {
    document.getElementById("carpet4").innerHTML = '<img src="https://i.ibb.co/KbrKJTR/red-Soap-transparent.png" alt="red-Soap-transparent" id="redSoap4" onclick="cleanCarpet4()">'
    increaseScore()
}
const redSoap7 = () => {
    document.getElementById("carpet7").innerHTML = '<img src="https://i.ibb.co/KbrKJTR/red-Soap-transparent.png" alt="red-Soap-transparent" id="redSoap7" onclick="cleanCarpet7()">'
    increaseScore()
}
const redSoap10 = () => {
    document.getElementById("carpet10").innerHTML = '<img src="https://i.ibb.co/KbrKJTR/red-Soap-transparent.png" alt="red-Soap-transparent" id="redSoap10" onclick="cleanCarpet10()">'
    increaseScore()
}
const redSoap13 = () => {
    document.getElementById("carpet13").innerHTML = '<img src="https://i.ibb.co/KbrKJTR/red-Soap-transparent.png" alt="red-Soap-transparent" id="redSoap13" onclick="cleanCarpet13()">'
    increaseScore()
}
const redSoap16 = () => {
    document.getElementById("carpet16").innerHTML = '<img src="https://i.ibb.co/KbrKJTR/red-Soap-transparent.png" alt="red-Soap-transparent" id="redSoap16" onclick="cleanCarpet16()">'
    increaseScore()
}
const redSoap19 = () => {
    document.getElementById("carpet19").innerHTML = '<img src="https://i.ibb.co/KbrKJTR/red-Soap-transparent.png" alt="red-Soap-transparent" id="redSoap19" onclick="cleanCarpet19()">'
    increaseScore()
}
const redSoap22 = () => {
    document.getElementById("carpet22").innerHTML = '<img src="https://i.ibb.co/KbrKJTR/red-Soap-transparent.png" alt="red-Soap-transparent" id="redSoap22" onclick="cleanCarpet22()">'
    increaseScore()
}
const redSoap25 = () => {
    document.getElementById("carpet25").innerHTML = '<img src="https://i.ibb.co/KbrKJTR/red-Soap-transparent.png" alt="red-Soap-transparent" id="redSoap25" onclick="cleanCarpet25()">'
    increaseScore()
}

const cleanCarpet1 = () => {
    document.getElementById("redSoap1").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet4 = () => {
    document.getElementById("redSoap4").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet7 = () => {
    document.getElementById("redSoap7").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet10 = () => {
    document.getElementById("redSoap10").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet13 = () => {
    document.getElementById("redSoap13").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet16 = () => {
    document.getElementById("redSoap16").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet19 = () => {
    document.getElementById("redSoap19").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet22 = () => {
    document.getElementById("redSoap22").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet25 = () => {
    document.getElementById("redSoap25").style.visibility = 'hidden'
    increaseScore()
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

