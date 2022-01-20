let arr = ["a", "b", "c", "d", "e", "f"];

console.log("-".repeat(35));

// Slice
console.log(arr.slice(2)); //[ 'c', 'd', 'e', 'f' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

console.log(arr.slice(2, 4)); // [ 'c', 'd' ]
console.log(arr.slice(-2)); //[ 'e', 'f' ]

console.log("-".repeat(35));

// Splice
console.log(arr.splice(2)); // [ 'c', 'd', 'e', 'f' ]
console.log(arr); // [ 'a', 'b' ] (mutates the original array)

arr = ["a", "b", "c", "d", "e", "f"];
console.log(arr.splice(1, 3)); // [ 'b', 'c', 'd' ]

console.log("-".repeat(35));

// Reverse
arr = ["a", "b", "c", "d", "e", "f"];
const arr2 = ["j", "i", "h", "g", "f"];

console.log(arr2.reverse()); // [ 'f', 'g', 'h', 'i', 'j' ] (mutates the original array)
console.log(arr2); // [ 'f', 'g', 'h', 'i', 'j' ]

console.log("-".repeat(35));

// Concat
const letters = arr.concat(arr2);

console.log(letters); // ["a", "b", "c", "d", "e", "f", "f", "g", "h", "i", "j" ]
console.log(...arr, ...arr2); // a b c d e f f g h i j

console.log("-".repeat(35));

// Join

console.log(letters.join(" - ")); // a - b - c - d - e - f - f - g - h - i - j
