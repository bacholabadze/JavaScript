'use strict'

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinsAvgScore = calcAverage(85, 54, 41);
const koalasAvgScore = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= avgKoalas * 2)
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    else if (avgKoalas >= avgDolphins * 2)
        console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
}
checkWinner(dolphinsAvgScore, koalasAvgScore);