"use strict";

const bina = {
  sartuli: 9,
  lokacia: "lotkini",
  mezoblebi: ["nuri", "zuri", "guri"],
  proeqti: "chexuri",

  lifti: function () {
    return [this.sartuli, " sartulze lifti camovida"];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [first, , second] = bina.mezoblebi;
console.log(first, second);

// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

[first, second] = [second, first];
console.log(first, second);

const [sartuli, pasuxi] = bina.lifti();
console.log(sartuli, pasuxi);

// const nested = [1, 2, [3, 4]];
// const [i, , [, k]] = nested;
// console.log(i, k);

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
