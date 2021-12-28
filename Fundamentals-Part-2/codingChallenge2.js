"use strict"

const calcTip = billsArr => {
    let tip = 0;
    let total = 0;
    for (let i = 0; i < billsArr.length; i++) {
        tip = billsArr[i] >= 50 && billsArr[i] <= 300 ? billsArr[i] * 0.15 : billsArr[i] * 0.2;
        console.log(`bill: ${billsArr[i]}, tip: ${tip}`);
        total += tip + billsArr[i];
        tip = 0;
    }
    console.log(`Total: ${total}`);
}

const bills = [125, 555, 44];
calcTip(bills);