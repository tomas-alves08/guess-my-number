"use strict";

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;

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

    //RESET THE GAME
    document.querySelector(".again").addEventListener("click", () => {
      secretNumber = Math.floor(Math.random() * 20 + 1);
      document.querySelector(".number").textContent = "?";
      document.querySelector(".message").textContent = "Start guessing...";
      document.querySelector(".score").textContent = "20";
      score = 20;
      document.querySelector(".guess").value = "";
      document.querySelector("body").style.backgroundColor = "#222";
      document.querySelector(".number").style.width = "15rem";
    });

    // When loses the game!!
  } else {
    document.querySelector(".message").textContent = "You lost the game! 💥";
    document.querySelector(".score").textContent = 0;
  }
});

// When win game, highscore = score
// if new score is bigger than previous, highscore = new score
