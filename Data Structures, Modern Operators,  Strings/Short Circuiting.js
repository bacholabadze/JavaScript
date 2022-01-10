"use strict";

const bina = {
  sartuli: 9,
  lokacia: "lotkini",
  mezoblebi: ["nuri", "guri", "zuri"],
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
    console.log(`Gaigvidzes ${mezobeli1}, ${mezobeli2}, ${mezobeli3}`);
  },
};

// prints first true value
console.log(undefined || 0 || "" || "Hello" || 23 || null);

// prints lela if there is no mezobeli
const mezobeli1 = bina.mezoblebi[0] ? bina.mezoblebi[0] : "lela";
console.log(mezobeli1);

bina.mezoblebi && bina.daudzaxeMezobels(...bina.mezoblebi);
