const bigGreenImage = document.getElementById("bigGreenImage")
const powerScrubDeluxeImage = document.getElementById("powerScrubDeluxeImage")
const rugDoctorImage = document.getElementById("rugDoctorImage")

const carpet = document.getElementById("carpet")

const smallCarpetBtn = document.getElementById("smallCarpetBtn")
const mediumCarpetBtn = document.getElementById("mediumCarpetBtn")
const largeCarpetBtn = document.getElementById("largeCarpetBtn")


const makeDivs = (numDivs) => {
    for (let i = 0; i < numDivs; i++){
        let cells = document.createElement("div");
        carpet.appendChild(cells)
    }
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

smallCarpetBtn.addEventListener('click', () => makeDivs(9))
mediumCarpetBtn.addEventListener('click', () => makeDivs(16))
largeCarpetBtn.addEventListener('click', () => makeDivs(25))