"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Testing";
// document.querySelector(".score").textContent = 20;
// document.querySelector(".number").textContent = 13;

// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 15;

let secretNumber = Math.trunc(Math.random() * 100 + 1);
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // if user have score more than 0, he/she can play
  if (score) {
    if (!guess) document.querySelector(".message").textContent = "No number!";
    // When player wins
    else if (guess === secretNumber) {
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".message").textContent =
        "🎉 You guessed, congratulations !";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
      // if user is close by 3
    } else if (Math.abs(guess - secretNumber) <= 3) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "😅 Almost!";
      // if user is close by 5
    } else if (Math.abs(guess - secretNumber) <= 5) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "😜 Too close!";
      // if user is close by 10
    } else if (Math.abs(guess - secretNumber) <= 10) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent =
        "😏 Not bad :) You're getting closer";
      // if user is close by 20
    } else if (Math.abs(guess - secretNumber) <= 20) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "🙄 Nah, Try better!";
      // if user is not close at all
    } else {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent =
        "🤣 You live on a different planet! =D";
    }
    // if user lost all scores
  } else {
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "You lost the game!";
    document.querySelector("body").style.backgroundColor = "#420D09";
  }
});
// if user clicks again button
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 100 + 1);
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
});
