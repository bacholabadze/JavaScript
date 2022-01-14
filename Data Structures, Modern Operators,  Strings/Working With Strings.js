"use strict";

const airline = "Georgian Airways";
const plane = "GE420";

console.log(plane[0]);

console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

// Index
console.log(airline.indexOf("A"));
console.log(airline.lastIndexOf("a"));

console.log(airline.slice(-7));
// Prints Airways
console.log(airline.slice(5));
// Prints ian Airways
console.log(airline.slice(9, -4));
// Prints Air

const checkMiddleSeat = function (seat) {
  // B and E are middle Seats
  const s = seat.slice(-1);
  if (s === "E" || s === "B") {
    console.log(true);
  } else {
    console.log(false);
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("Jonas"));
console.log(typeof new String("Jonas"));
