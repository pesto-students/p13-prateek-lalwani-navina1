function* generateSequence(array) {
    for (const element of array) {
        yield Symbol(element)
    }
}
const inputArray = ['hello', 'world', 'test'];
const generator = generateSequence(inputArray);
for (let value of generator) {
    console.log(value)
}