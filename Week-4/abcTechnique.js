class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    add() {
        return (` Sum is ${this.num1 + this.num2}`);
    }
    subtract() {
        return (` Difference is ${this.num1 - this.num2}`);
    }
    multiply() {
        return (` Product is ${this.num1 * this.num2}`);
    }
    divide() {
        if (this.num2 === 0) {
            return ("Cannot divide by zero");
        }
        return (` Quotient is ${this.num1 / this.num2}`);
    }
}
class ScientificCalculator extends Calculator {
    constructor(number) {
        this.number = number
    }
    square() {
        return this.number * this.number;
    }
    cube() {
        return this.number * this.number * this.number;
    }
    power(base, exponent) {
        return Math.pow(base, exponent);
    }
}
const ScientificCalculator1=new ScientificCalculator(5);
// Using "call" method to invoke "add" method of Calculator class
const resultAdd=Calculator.prototype.add.call(ScientificCalculator1,10,5);
console.log("Using call - Addition:", resultAdd);