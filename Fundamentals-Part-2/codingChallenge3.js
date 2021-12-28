const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBmi: function () {
        this.bmi = this.mass / this.height ** 2 | 0;
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBmi: function () {
        this.bmi = this.mass / this.height ** 2 | 0;
        return this.bmi;
    }
}

mark.calcBmi();
john.calcBmi();

mark.bmi > john.bmi ? console.log(`${mark.fullName} has more bmi (${mark.bmi})`) :
    console.log(`${john.fullName} has more bmi (${john.bmi})`)

