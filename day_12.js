class Student extends Person {
    constructor(firstName, lastName, idNumber, testScores) {
        super(firstName, lastName, idNumber)
        this.scores = testScores;
    }
    
    calculate() {
        let a = this.scores.reduce((accum, current) => { return accum + current }) / this.scores.length

        if (a >= 90 && a <= 100) { return("O") }
        else if (a >= 80 && a < 90) { retun ("E") }
        else if (a >= 70 && a < 80) { return ("A") }
        else if (a >= 55 && a < 70) { return ('P') }
        else if (a >= 40 && a < 55) { return ("D") }
        else if ( a < 40 ) {return ("T")}
    }
    
}