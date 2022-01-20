"use strict";
const poll = {
  answers: [
    ["JavaScript", 0],
    ["Python", 0],
    ["Rust", 0],
    ["C++", 0],
  ],
  registerNewAnswer() {
    let ans = prompt(
      `What is your favourite programming language?\n0: JavaScript\n1: Python\n2: Rust\n3: C++\n(Write option number)`
    );
    if (ans >= 0 && ans <= 3) poll.answers[ans][1] += 1;
    else alert("Wrong choice.");
    poll.displayResults("array");
    poll.displayResults("string");
  },
  displayResults(type) {
    if (type === "string") {
      console.log(
        poll.answers.join("").replace(/[\D]/g, "").split("").join(", ")
      );
    } else if (type === "array") console.log(poll.answers);
  },
};
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer);
