"use strict";

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;

//DISPLAY MESSAGE FUNCTION
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

//DISPLAY SCORE FUNCTION
const displayScore = (score) => {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (score > 1) {
    // NO INPUT
    if (!guess) {
      displayMessage("no number ⛔️");

      // GUESS IS RIGHT!
    } else if (guess === secretNumber) {
      displayMessage("Correct Number! 🎉");
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = secretNumber;

      // HIGHSCORE FUNCTIONALITY
      if (
        document.querySelector(".score").textContent >
        document.querySelector(".highscore").textContent
      ) {
        document.querySelector(".highscore").textContent =
          document.querySelector(".score").textContent;
      }

      // GUESS IS WRONG!!
    } else if (guess !== secretNumber) {
      displayMessage(guess > secretNumber ? "Too high! 📈" : "Too low! 📉");
      score--;
      displayScore(score);
    }

    // LOSES THE GAME!!
  } else {
    displayMessage("You lost the game! 💥");
    displayScore(0);
  }
});

//RESET THE GAME
document.querySelector(".again").addEventListener("click", () => {
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  displayScore("20");
  score = 20;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
