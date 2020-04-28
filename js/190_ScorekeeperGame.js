//Variables from HTML
var buttonPlayerOne = document.querySelectorAll("button")[0];
var buttonPlayerTwo = document.querySelectorAll("button")[1];
var buttonReset = document.querySelectorAll("button")[2];
var h1PlayerOne = document.querySelector("#p1Display");
var h1PlayerTwo = document.querySelector("#p2Display");
var h3 = document.querySelector("h3");
var textInput = document.querySelector("input");

//Variables from Logic
var scorePlayerOne = 0;
var scorePlayerTwo = 0;
var maximum = 5;
var gameOver = false;

//Add event listeners
buttonPlayerOne.addEventListener("click", playerOneScored, false);
buttonPlayerTwo.addEventListener("click", playerTwoScored, false);
buttonReset.addEventListener("click", reset);
textInput.addEventListener("change", valueChanged);

//My functions
function playerOneScored() {
    if(!gameOver) {
        scorePlayerOne += 1;
        if(scorePlayerOne === maximum) {
            h1PlayerOne.classList.add("green");
            gameOver = true;
        }
        updateHeadline();
    }
}

function playerTwoScored() {
    if(!gameOver) {
        scorePlayerTwo += 1;
        if(scorePlayerTwo === maximum) {
            h1PlayerTwo.classList.add("green");
            gameOver = true;
        }
        updateHeadline();
    }
}

function updateHeadline() {
    h1PlayerOne.textContent = scorePlayerOne;
    h1PlayerTwo.textContent = scorePlayerTwo;
}

function reset() {
    scorePlayerOne = 0;
    scorePlayerTwo = 0;
    updateHeadline();
    gameOver = false;
    h1PlayerOne.classList.remove("green");
    h1PlayerTwo.classList.remove("green");
}

function valueChanged() {
    maximum = Number(textInput.value);
    h3.textContent = "Playing to: " + maximum;
    reset();
}