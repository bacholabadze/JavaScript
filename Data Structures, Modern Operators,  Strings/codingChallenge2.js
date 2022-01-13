"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borusia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Shulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
for (const player of game.scored.entries()) {
  console.log(`Goal ${player[0] + 1}: ${player[1]}`);
}

// 2
let oddsAvg = 0;
for (const odd of Object.values(game.odds)) {
  oddsAvg += odd;
}
oddsAvg /= 3;
console.log(`Average odd: ${oddsAvg}`);

// 3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}: `;
  console.log(`Odd of ${teamStr} ${odd} `);
}

// Bonus
const scorers = {};
for (const scorer of game.scored) {
  if (scorers[scorer] >= 1) {
    scorers[scorer] += 1;
  } else scorers[`${scorer}`] = 1;
}
console.log(scorers);
