class calculator {
    add(a,b) {
        return a + b;
    }
    substract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    division(a, b) {
        return a / b;
    }
}

class scientificCalculator extends calculator {
    square(a) {
        return a * a;
    }
}

let object1 = new scientificCalculator();
let result = object1.add.call(object1,10, 5);
console.log(result);

let result2 = object1.substract.apply(object1, [10, 5]);
console.log(result2);

const multiplyByTwo = object1.multiply.bind(object1, 7, 2)
let result3 = multiplyByTwo();
console.log(result3);

function multiplybytwo2(a){
    return a * 2;
}
const mul = multiplybytwo2.bind(object1, 10);
let result4 = mul();
console.log(result4);

function powerOfThree(a) {
    return a * a * a;
}
let pow = powerOfThree.bind(object1, 3);
let result5 = pow();
console.log(result5);