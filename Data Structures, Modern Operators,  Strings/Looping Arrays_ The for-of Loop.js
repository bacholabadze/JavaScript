const bina = {
  sartuli: 9,
  lokacia: "lotkini",
  mezoblebi: ["nuri", "zuri", "guri"],
  axaliMezoblebi: ["Xvicha", "Gocha"],
  proeqti: "chexuri",
  otaxebi: {
    sadzinebeli: {
      pirveliSadzinebeli: "20kvm",
      meoreSadzinebeli: "25kvm",
    },
    misaghebi: "35kvm",
    sul: "100kvm",
  },
};

const sulMezoblebi = [...bina.mezoblebi, ...bina.axaliMezoblebi];

for (const neighbor of sulMezoblebi) console.log(neighbor);
console.log("\n");

for (const neighbor of sulMezoblebi.entries()) {
  console.log(`${neighbor[0]} <=> ${neighbor[1]}`);
}
console.log("\n");

console.log(...sulMezoblebi.entries());
