'use strict'

const billsArr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = []
let totals = [];
 
const calcTip = (arrBills) => {
    for (let i = 0; i < arrBills.length; i++) {
        tips.push(arrBills[i] >= 50 && arrBills[i] <= 300 ? arrBills[i] * 0.15 : arrBills[i] * 0.2);
        totals.push(tips[i] + arrBills[i])
    }
}

const viewBill = function () {
    for (let i = 0; i < billsArr.length; i++) {
        console.log(`--------------------------------------------------`);
        console.log(`Bill = ${billsArr[i]}, tip = ${tips[i]}, total = ${totals[i]}.`);
    }
    console.log(`--------------------------------------------------`);
}
calcTip(billsArr);
viewBill();
