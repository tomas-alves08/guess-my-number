"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!🎉";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 20;
// document.querySelector(".score").textContent = 13;

// document.querySelector(".guess").value = 15;
// console.log(document.querySelector(".guess").value);

//generate a random number
//write Math.random method
//use floor method
//multiply by 20 and add 1

const secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (score > 1) {
    // There is no input!
    if (!guess) {
      document.querySelector(".message").textContent = "no number ⛔️";
      // When player gets the right number!
    } else if (guess === secretNumber) {
      document.querySelector(".message").textContent = "Correct Number! 🎉";
      document.querySelector("body").style(ba);
      // When too high!!
    } else if (guess > secretNumber) {
      document.querySelector(".message").textContent = "Too high! 📈";
      score--;
      document.querySelector(".score").textContent = score;
      // When too low!
    } else if (guess < secretNumber) {
      document.querySelector(".message").textContent = "Too low! 📉";
      score--;
      document.querySelector(".score").textContent = score;
    }
    // When loses the game!!
  } else {
    document.querySelector(".message").textContent = "You lost the game! 💥";
    document.querySelector(".score").textContent = 0;
  }
});
