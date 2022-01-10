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
};

bina.axaliInventari({
  inventari: "iphone 13",
  misamarti: "aqve axlos",
  nomeri: "557615931",
});

// const { sartuli, mezoblebi, lokacia } = bina;
// console.log(sartuli, lokacia, mezoblebi);

const {
  sartuli: sartuliBina,
  mezoblebi: mezoblebiBina,
  proeqti: proeqtiBina,
} = bina;

// console.log(sartuliBina, proeqtiBina);

const { mflobeli = "ar kavs", sartuli: romeliSartuli = "araa mititebuli" } =
  bina;
// console.log(romeliSartuli);

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

const {
  otaxebi: {
    sadzinebeli: { pirveliSadzinebeli, meoreSadzinebeli },
  },
} = bina;
console.log(pirveliSadzinebeli, meoreSadzinebeli);
