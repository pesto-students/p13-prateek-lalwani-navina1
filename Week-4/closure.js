function counter() {
    let count = 1;
    function innerCounter() {
        return count++;
    }
    return innerCounter;
}

var firstValues = [];
var secondValues = [];

const firstCounter = counter();
//calling firstCounter function 5times and pushing the values to firstValues array.
for (let i = 0; i < 5; i++){
    firstValues.push(firstCounter())
}
console.log(firstValues);

//calling secondCounter function 3times and pushing the values to secondValues array.
const secondCounter = counter();
for (let j = 0; j < 3; j++){
    secondValues.push(secondCounter())
}
console.log(secondValues)