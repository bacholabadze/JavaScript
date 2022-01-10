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

const dasadzaxebeliMezoblebi = [
  prompt("Romeli Mezoblebi Shevacuxot? Mezobeli No1"),
  prompt("Romeli Mezoblebi Shevacuxot? Mezobeli No2"),
  prompt("Romeli Mezoblebi Shevacuxot? Mezobeli No3"),
];

bina.daudzaxeMezobels(...dasadzaxebeliMezoblebi);

const newOtaxi = { aivani: "20kvm", ...bina.otaxebi.sadzinebeli };
console.log(newOtaxi);

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

const newArr = [1, 2, ...arr];
console.log(newArr);

const newMezobeli = ["izzy", "gizzy", ...bina.mezoblebi];
console.log(newMezobeli);

let mezobeliCopy = [...bina.mezoblebi];
mezobeliCopy.push("Saly");
console.log(bina.mezoblebi, mezobeliCopy);

const joinMezoblebi = [...newMezobeli, ...mezobeliCopy];
console.log(joinMezoblebi);
