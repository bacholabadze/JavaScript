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
