const orderSet = new Set([
  "Pasta",
  "Pasta",
  "Pasta",
  "Brokoli",
  "Pizza",
  "Brokoli",
  "Brokoli",
  "Pizza",
]);
console.log(orderSet);
// Prints Set(3) { 'Pasta', 'Brokoli', 'Pizza' }

console.log(new Set("Hello"));
// Prints Set(4) { 'H', 'e', 'l', 'o' }

console.log(orderSet.size);
// Prints 3

console.log(orderSet.has("Pizza"));
// Prints true

orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");

orderSet.delete("Brokoli");
orderSet.delete("Brokoli");

// orderSet.clear();

console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}

const staff = [
  "Mimtani",
  "Mzareuli",
  "Mimtani",
  "Menejeri",
  "Mzareuli",
  "Shefi",
];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
// [ 'Mimtani', 'Mzareuli', 'Menejeri', 'Shefi' ]
