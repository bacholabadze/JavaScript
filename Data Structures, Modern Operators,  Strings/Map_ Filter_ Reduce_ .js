const arr = [1, 2, 3, 4, 5, 6, 7];

let newArr = arr.filter((x) => x % 2 === 0);
console.log(newArr); // [ 2, 4, 6 ]

newArr = arr.map((x) => x % 2 === 0);
console.log(newArr); // [false,true,false,true,false,true,false]

newArr = arr.map((a) => a * 2);
console.log(newArr); // [2,4,6,8,10,12,14]

newArr = arr.reduce((num1, num2) => {
  return num1 + num2;
});
console.log(newArr); // 28 (sum of all numbers in list)

newArr = arr
  .filter((x) => x % 2 === 0) // [2,4,6]
  .map((x) => x * 2) // [4,8,12]
  .reduce((a, b) => {
    // 24
    return a + b;
  });
console.log(newArr);

// ----------------------------------------------------------------------------------------------------------

const orders = [
  {
    userId: 1,
    amount: 10,
  },
  {
    userId: 1,
    amount: 15,
  },
  {
    userId: 2,
    amount: 5,
  },
  {
    userId: 2,
    amount: 100,
  },
];

const userOne = orders
  .filter((order) => order.userId === 1) // [ { userId: 1, amount: 10 }, { userId: 1, amount: 15 } ]
  .map((order) => order.amount) // [10,15]
  .reduce((order1, order2) => order1 + order2); // 25
console.log(userOne);
