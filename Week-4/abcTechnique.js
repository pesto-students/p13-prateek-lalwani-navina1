class Calculator {
  add(num1, num2) {
    return ` Sum is ${num1 + num2}`;
  }
  subtract(num1, num2) {
    return ` Difference is ${num1 - num2}`;
  }
  multiply(num1, num2) {
    return ` Product is ${num1 * num2}`;
  }
  divide(num1, num2) {
    if (num2 === 0) {
      return "Cannot divide by zero";
    }
    return ` Quotient is ${num1 / num2}`;
  }
}
class ScientificCalculator extends Calculator {
  square(num) {
    return this.number * this.number;
  }
  cube(num) {
    return this.number * this.number * this.number;
  }
  power(num, power) {
    return num ** power;
  }
}
const scientificCalculator1 = new ScientificCalculator();
// Using "call" method to invoke "add" method of Calculator class
const resultAdd = scientificCalculator1.add.call(scientificCalculator1, 10, 5);
console.log("Using call - Addition:", resultAdd);

const resultSub = scientificCalculator1.subtract.apply(
  scientificCalculator1,
  [10, 5]
);
console.log("Using apply - substraction:", resultSub);

function multiplyByTwo(num) {
  return num * 2;
}

const resultMultiplyByTwo = multiplyByTwo.bind(scientificCalculator1, 5);
console.log(`multiply by two using bind ${resultMultiplyByTwo()}`);

function powerOfThree(num) {
  return num * num * num;
}

const resultPowerOfThree = powerOfThree.bind(scientificCalculator1, 2);
console.log(`Cube of two is ${resultPowerOfThree()}`);
