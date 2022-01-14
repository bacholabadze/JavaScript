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
// {0:J...}
console.log(typeof new String("Jonas"));
// prints Object

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization
const passenger = "jOnAS";
const passengerCorrect =
  passenger.toLowerCase()[0].toUpperCase() + passenger.toLowerCase().slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = "hello@iz.zy";
const loginEmail = "    Hello@Iz.Zy \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
// Prints hello@iz.zy

const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);
// Prints hello@iz.zy
//        true

// replacing
const priceLari = "4059,99₾";
const priceUS = priceLari.replace("₾", "$").replace(",", ".");
console.log(priceUS);

const announcement = "Kvela mgzavri amodit gavdivart, gavdivart !";
console.log(announcement.replace("Kvela", "Yvela"));
console.log(announcement.replaceAll("gavdivart", "gaaavdivaaart"));
console.log(announcement.replace(/mgzavri/g, "vinc modis"));
// G stans for global

//Booleans
const newplane = "A420geo";
console.log(newplane.includes("420"));
console.log(newplane.startsWith("A4"));
console.log(newplane.endsWith("geo"));

// Practice exercise
const checkBaggage = function (items) {
  items.includes("knife")
    ? console.log(`Knife! Not allowed:`)
    : console.log("Go ahead");
};

checkBaggage("I have a laptop, some burgers and a pocket knife");

console.log("a+very+nice+string".split("+"));
// console.log("Bacho Labadze".split(" "));

const [firstname, lastname] = "Bacho Labadze".split(" ");
// console.log(firstname);

const newName = ["Mr.", firstname, lastname.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(36, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(9412237381));
console.log(maskCreditCard("2134037384"));

// Repeat
const message2 = "Bad weather... All departues delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"/|\\ ".repeat(n)}`);
};
planesInLine(5);
