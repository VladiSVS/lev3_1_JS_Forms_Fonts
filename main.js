function showPoints() {
    document.getElementById("result").style.fontSize = document.getElementById("points").value + "px"
}

document.getElementById("fontBodoni").innerHTML = "'Bodoni Moda', serif"
document.getElementById("fontOpen").innerHTML = "'Open Sans', sans-serif"
document.getElementById("fontRoboto").innerHTML = "'Roboto', sans-serif"
document.getElementById("fontMagic").innerHTML = "'Yusei Magic', sans-serif"

function showFonts() {
    document.getElementById("result").style.fontFamily = document.getElementById("moods").value
}

function writeText() {
    document.getElementById("result").innerHTML = document.getElementById("text").value
}