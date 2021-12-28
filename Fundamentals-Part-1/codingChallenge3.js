const bill = 40;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`tip = ${tip}`);
console.log(`total = ${bill + tip}`);
