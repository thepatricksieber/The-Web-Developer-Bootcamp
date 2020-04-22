let number = 7

let stringGuess = prompt("Guess a number")
let guess = Number(stringGuess)

if(guess === number) {
    alert("Right")
} else if (guess < number) {
    alert("Too low, try again")
} else {
    alert("Too high, try again")
}