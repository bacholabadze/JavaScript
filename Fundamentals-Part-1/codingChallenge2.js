const scoreDolphins = (97 + 112 + 98) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    const text = `Dolphins win. ${scoreDolphins | 0}`;
    console.log(text);
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100)
    console.log("Koalas win.");
else if (scoreKoalas === scoreDolphins && scoreKoalas > 100)
    console.log("Draw.");
else
    console.log("Losers.")
