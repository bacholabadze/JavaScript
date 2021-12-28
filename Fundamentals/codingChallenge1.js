let massMark = 70
let heightMark = 1.74

let massJohn = 100
let heightJohn = 1.81

let bmiMark = massMark / heightMark ** 2
let bmiJohn = massJohn / heightJohn ** 2

let markHigherBMI = bmiMark > bmiJohn
console.log(bmiMark, bmiJohn, markHigherBMI)