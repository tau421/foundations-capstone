var score = 0

const getHighScoresBtn = document.getElementById('getHighScoresBtn')
const highScoreSubmitBtn = document.getElementById('highScoreSubmit')

const bigGreenImage = document.getElementById("bigGreenImage")
const powerScrubDeluxeImage = document.getElementById("powerScrubDeluxeImage")
const rugDoctorImage = document.getElementById("rugDoctorImage")

const carpet = document.getElementById("carpet")

const smallMessBtn = document.getElementById("smallMessBtn")
const mediumMessBtn = document.getElementById("mediumMessBtn")
const largeMessBtn = document.getElementById("largeMessBtn")

const makeRedMess = () => {
    let visibleSmallMess = document.getElementsByClassName("redMess");
    for (i = 0; i < visibleSmallMess.length; i++) {
        if (visibleSmallMess[i].style.visibility != 'visible') {
            visibleSmallMess[i].style.visibility = 'visible';
        } else {
            visibleSmallMess[i].style.visibility = 'hidden'
        }
    }  
}

const makeYellowMess = () => {
    let visibleMediumMess = document.querySelectorAll(".yellowMess");
    for (i = 0; i < visibleMediumMess.length; i++) {
        if (visibleMediumMess[i].style.visibility != 'visible') {
            visibleMediumMess[i].style.visibility = 'visible';
        } else {
            visibleMediumMess[i].style.visibility = 'hidden'
        }
    }
}

const makeBrownMess = () => {
    let visibleLargeMess = document.querySelectorAll(".brownMess");
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
const yellowSoap2 = () => {
    document.getElementById("carpet2").innerHTML = '<img src="https://i.ibb.co/2Myv0Zw/yellow-Soap-transparent.png" alt="yellow-Soap-transparent" id="yellowSoap2" onclick="cleanCarpet2()">'
    increaseScore()
}
const brownSoap3 = () => {
    document.getElementById("carpet3").innerHTML = '<img src="https://i.ibb.co/7S6Y1rb/brown-Soap-transparent.png" alt="brown-Soap-transparent" id="brownSoap3" onclick="cleanCarpet3()">'
    increaseScore()
}
const redSoap4 = () => {
    document.getElementById("carpet4").innerHTML = '<img src="https://i.ibb.co/KbrKJTR/red-Soap-transparent.png" alt="red-Soap-transparent" id="redSoap4" onclick="cleanCarpet4()">'
    increaseScore()
}
const yellowSoap5 = () => {
    document.getElementById("carpet5").innerHTML = '<img src="https://i.ibb.co/2Myv0Zw/yellow-Soap-transparent.png" alt="yellow-Soap-transparent" id="yellowSoap5" onclick="cleanCarpet5()">'
    increaseScore()
}
const brownSoap6 = () => {
    document.getElementById("carpet6").innerHTML = '<img src="https://i.ibb.co/7S6Y1rb/brown-Soap-transparent.png" alt="brown-Soap-transparent" id="brownSoap6" onclick="cleanCarpet6()">'
    increaseScore()
}
const redSoap7 = () => {
    document.getElementById("carpet7").innerHTML = '<img src="https://i.ibb.co/KbrKJTR/red-Soap-transparent.png" alt="red-Soap-transparent" id="redSoap7" onclick="cleanCarpet7()">'
    increaseScore()
}
const yellowSoap8 = () => {
    document.getElementById("carpet8").innerHTML = '<img src="https://i.ibb.co/2Myv0Zw/yellow-Soap-transparent.png" alt="yellow-Soap-transparent" id="yellowSoap8" onclick="cleanCarpet8()">'
    increaseScore()
}
const brownSoap9 = () => {
    document.getElementById("carpet9").innerHTML = '<img src="https://i.ibb.co/7S6Y1rb/brown-Soap-transparent.png" alt="brown-Soap-transparent" id="brownSoap9" onclick="cleanCarpet9()">'
    increaseScore()
}
const redSoap10 = () => {
    document.getElementById("carpet10").innerHTML = '<img src="https://i.ibb.co/KbrKJTR/red-Soap-transparent.png" alt="red-Soap-transparent" id="redSoap10" onclick="cleanCarpet10()">'
    increaseScore()
}
const yellowSoap11 = () => {
    document.getElementById("carpet11").innerHTML = '<img src="https://i.ibb.co/2Myv0Zw/yellow-Soap-transparent.png" alt="yellow-Soap-transparent" id="yellowSoap11" onclick="cleanCarpet11()">'
    increaseScore()
}
const brownSoap12 = () => {
    document.getElementById("carpet12").innerHTML = '<img src="https://i.ibb.co/7S6Y1rb/brown-Soap-transparent.png" alt="brown-Soap-transparent" id="brownSoap12" onclick="cleanCarpet12()">'
    increaseScore()
}
const redSoap13 = () => {
    document.getElementById("carpet13").innerHTML = '<img src="https://i.ibb.co/KbrKJTR/red-Soap-transparent.png" alt="red-Soap-transparent" id="redSoap13" onclick="cleanCarpet13()">'
    increaseScore()
}
const yellowSoap14 = () => {
    document.getElementById("carpet14").innerHTML = '<img src="https://i.ibb.co/2Myv0Zw/yellow-Soap-transparent.png" alt="yellow-Soap-transparent" id="yellowSoap14" onclick="cleanCarpet14()">'
    increaseScore()
}
const brownSoap15 = () => {
    document.getElementById("carpet15").innerHTML = '<img src="https://i.ibb.co/7S6Y1rb/brown-Soap-transparent.png" alt="brown-Soap-transparent" id="brownSoap15" onclick="cleanCarpet15()">'
    increaseScore()
}
const redSoap16 = () => {
    document.getElementById("carpet16").innerHTML = '<img src="https://i.ibb.co/KbrKJTR/red-Soap-transparent.png" alt="red-Soap-transparent" id="redSoap16" onclick="cleanCarpet16()">'
    increaseScore()
}
const yellowSoap17 = () => {
    document.getElementById("carpet17").innerHTML = '<img src="https://i.ibb.co/2Myv0Zw/yellow-Soap-transparent.png" alt="yellow-Soap-transparent" id="yellowSoap17" onclick="cleanCarpet17()">'
    increaseScore()
}
const brownSoap18 = () => {
    document.getElementById("carpet18").innerHTML = '<img src="https://i.ibb.co/7S6Y1rb/brown-Soap-transparent.png" alt="brown-Soap-transparent" id="brownSoap18" onclick="cleanCarpet18()">'
    increaseScore()
}
const redSoap19 = () => {
    document.getElementById("carpet19").innerHTML = '<img src="https://i.ibb.co/KbrKJTR/red-Soap-transparent.png" alt="red-Soap-transparent" id="redSoap19" onclick="cleanCarpet19()">'
    increaseScore()
}
const yellowSoap20 = () => {
    document.getElementById("carpet20").innerHTML = '<img src="https://i.ibb.co/2Myv0Zw/yellow-Soap-transparent.png" alt="yellow-Soap-transparent" id="yellowSoap20" onclick="cleanCarpet20()">'
    increaseScore()
}
const brownSoap21 = () => {
    document.getElementById("carpet21").innerHTML = '<img src="https://i.ibb.co/7S6Y1rb/brown-Soap-transparent.png" alt="brown-Soap-transparent" id="brownSoap21" onclick="cleanCarpet21()">'
    increaseScore()
}
const redSoap22 = () => {
    document.getElementById("carpet22").innerHTML = '<img src="https://i.ibb.co/KbrKJTR/red-Soap-transparent.png" alt="red-Soap-transparent" id="redSoap22" onclick="cleanCarpet22()">'
    increaseScore()
}
const yellowSoap23 = () => {
    document.getElementById("carpet23").innerHTML = '<img src="https://i.ibb.co/2Myv0Zw/yellow-Soap-transparent.png" alt="yellow-Soap-transparent" id="yellowSoap23" onclick="cleanCarpet23()">'
    increaseScore()
}
const brownSoap24 = () => {
    document.getElementById("carpet24").innerHTML = '<img src="https://i.ibb.co/7S6Y1rb/brown-Soap-transparent.png" alt="brown-Soap-transparent" id="brownSoap24" onclick="cleanCarpet24()">'
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
const cleanCarpet2 = () => {
    document.getElementById("yellowSoap2").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet3 = () => {
    document.getElementById("brownSoap3").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet4 = () => {
    document.getElementById("redSoap4").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet5 = () => {
    document.getElementById("yellowSoap5").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet6 = () => {
    document.getElementById("brownSoap6").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet7 = () => {
    document.getElementById("redSoap7").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet8 = () => {
    document.getElementById("yellowSoap8").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet9 = () => {
    document.getElementById("brownSoap9").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet10 = () => {
    document.getElementById("redSoap10").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet11 = () => {
    document.getElementById("yellowSoap11").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet12 = () => {
    document.getElementById("brownSoap12").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet13 = () => {
    document.getElementById("redSoap13").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet14 = () => {
    document.getElementById("yellowSoap14").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet15 = () => {
    document.getElementById("brownSoap15").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet16 = () => {
    document.getElementById("redSoap16").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet17 = () => {
    document.getElementById("yellowSoap17").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet18 = () => {
    document.getElementById("brownSoap18").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet19 = () => {
    document.getElementById("redSoap19").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet20 = () => {
    document.getElementById("yellowSoap20").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet21 = () => {
    document.getElementById("brownSoap21").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet22 = () => {
    document.getElementById("redSoap22").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet23 = () => {
    document.getElementById("yellowSoap23").style.visibility = 'hidden'
    increaseScore()
}
const cleanCarpet24 = () => {
    document.getElementById("brownSoap24").style.visibility = 'hidden'
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
        alert(JSON.stringify(highScores))
    })
}

const increaseScore = () => {
    score = score + 1000;
    var labelScore = document.getElementById('labelScore');
    labelScore.innerHTML = score;
}

const addHighScore = (body) => {
    axios.post("http://localhost:5400/api/highscores/", body)
    .then(res => {
        alert("You added your score!")
    })
}

const highScoreSubmission = () => {
    let highScoreSubmission = document.querySelector("#pName")
    let currentScore = document.getElementById('labelScore')
    let bodyObj = {
        name: highScoreSubmission.value,
        score: currentScore.innerHTML
    }
    console.log(bodyObj)
    addHighScore(bodyObj)
}

const changeCursorBigGreen = () => {
    document.body.style.cursor = "url(https://i.ibb.co/mBGJtyv/big-Green100x100-transparent.png) 50 50, auto"
}
const changeCursorPowerScrubDeluxe = () => {
    document.body.style.cursor = "url(https://i.ibb.co/D84tRHh/power-Scrub-Deluxe100x100-transparent.png) 50 50, auto"
}
const changeCursorRugDoctor = () => {
    document.body.style.cursor = "url(https://i.ibb.co/7kdhGH8/rug-Doctor100x100-transparent.png) 50 50, auto"
}

bigGreenImage.addEventListener('click', changeCursorBigGreen)
powerScrubDeluxeImage.addEventListener('click', changeCursorPowerScrubDeluxe)
rugDoctorImage.addEventListener('click', changeCursorRugDoctor)

smallMessBtn.addEventListener('click', makeRedMess)
mediumMessBtn.addEventListener('click', makeYellowMess)
largeMessBtn.addEventListener('click', makeBrownMess)

getHighScoresBtn.addEventListener('click', getHighScores)
highScoreSubmitBtn.addEventListener('click', highScoreSubmission)
