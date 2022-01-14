const gameEvents = new Map([
  [17, "GOAL"],
  [36, "Substitution"],
  [47, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow Card"],
  [69, "Red Card"],
  [70, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow Card"],
]);

// 1
const events = [...new Set(gameEvents.values())];
console.log("\n", events);

// 2
gameEvents.delete(64);
console.log("\n", gameEvents);

// 3
console.log(
  `\nAn event happend, on average, every ${90 / gameEvents.size} minutes\n`
);
// Bonus
const time = [...gameEvents.keys()].pop() / gameEvents.size;
console.log(
  `\nSorry, An event happend, on average, every ${
    Math.round(time * 100) / 100
  } minutes\n`
);

// 4
for (const [min, event] of gameEvents) {
  min < 46
    ? console.log(`[FIRST HALF] ${min}: ${event}`)
    : console.log(`[SECOND HALF] ${min}: ${event}`);
}
