"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const otaxebi = {
  [`tavisufali dghe -${weekdays[0]}`]: {
    sadzinebeli: {
      pirveliSadzinebeli: "20kvm",
      meoreSadzinebeli: "25kvm",
    },
    misaghebi: "35kvm",
    sul: "100kvm",
  },
};

const bina = {
  sartuli: 9,
  lokacia: "lotkini",
  mezoblebi: ["nuri", "zuri", "guri"],
  axaliMezoblebi: ["Xvicha", "Gocha"],
  proeqti: "chexuri",

  // ES6 enhanced object literals
  otaxebi,

  lifti(sartuli) {
    return [sartuli, "lifti gamodzaxebulia"];
  },
};
console.log(bina.otaxebi);
console.log(bina.lifti(5));
