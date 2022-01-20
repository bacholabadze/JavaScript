"use strict";
const greece = {
  airline: "GRairWays",
  iataCode: "GRL",
  bookings: [],

  // book: function () {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

greece.book(239, "Labadze Ambri");
greece.book(635, "Labadze Bacho");

// console.log(greece.bookings);
// [
//     { flight: 'GRL239', name: 'Labadze Ambri' },
//     { flight: 'GRL635', name: 'Labadze Bacho' }
// ]

const book = greece.book;

// Call method
book.call(greece, 23, "Ez");
console.log(greece);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

// Apply method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);

// Same
book.call(swiss, ...flightData);

// Bind method
const bookGR = book.bind(greece);
bookGR(23, "Steven Williams");
console.log(greece);

// With Event Listeners
greece.planes = 300;
greece.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", greece.buyPlane.bind(greece));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
