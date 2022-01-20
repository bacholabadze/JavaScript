const currencies = new Map([
  ["USD", "United States Dollar"],
  ["GEL", "Georgian Lari"],
  ["GBP", "Pound Sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${value}: ${key}, Map: ${map}`);
  // United States Dollar: USD, Map: [object Map]
  // Georgian Lari: GEL, Map: [object Map]
  // Pound Sterling: GBP, Map: [object Map]
});

// Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "GEL"]);
console.log(currenciesUnique); // Set(4) { 'USD', 'GBP', 'EUR', 'GEL' }

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
  // USD: USD
  // GBP: GBP
  // EUR: EUR
  // GEL: GEL
  // Set does not have keys and indexes =)
});
