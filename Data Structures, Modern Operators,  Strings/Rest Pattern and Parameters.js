"use strict";

const bina = {
  sartuli: 9,
  lokacia: "lotkini",
  mezoblebi: ["nuri", "zuri", "guri"],
  proeqti: "chexuri",
  otaxebi: {
    sadzinebeli: {
      pirveliSadzinebeli: "20kvm",
      meoreSadzinebeli: "25kvm",
    },
    misaghebi: "35kvm",
    sul: "100kvm",
  },

  lifti: function () {
    return [this.sartuli, " sartulze lifti camovida"];
  },

  axaliInventari: function ({ inventari, micodebisAdgili, nomeri }) {
    console.log(
      `Gilocav! ${this.sartuli} sartulze amova kurieri xelshi ${inventari} -it. telNom: ${nomeri}`
    );
  },

  daudzaxeMezobels: function (mezobeli1, mezobeli2, mezobeli3) {
    console.log(`Gaigvidzes ${mezobeli1}, ${mezobeli2} ${mezobeli3}`);
  },
};

const arr = [1, 2, ...[3, 4]];
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(others);

const [mez1, , mez3, ...sxva] = [...bina.mezoblebi, bina.proeqti];
console.log(sxva, mez3);

const add = function (...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) sum += args[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);

const x = [13, 56, 15];
add(...x);
