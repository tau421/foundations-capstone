var score = 0

const bigGreenImage = document.getElementById("bigGreenImage")
const powerScrubDeluxeImage = document.getElementById("powerScrubDeluxeImage")
const rugDoctorImage = document.getElementById("rugDoctorImage")

const carpet = document.getElementById("carpet")

const smallMessBtn = document.getElementById("smallMessBtn")
const mediumMessBtn = document.getElementById("mediumMessBtn")
const largeMessBtn = document.getElementById("largeMessBtn")

const makeSmallMess = () => {
    let visibleSmallMess = document.getElementsByClassName("redMess");
    if (visibleSmallMess.style.visibility === 'hidden') {
        visibleSmallMess.style.visibility = 'visible';
    } else {
        visibleSmallMess.style.visibility = 'hidden'
    }
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