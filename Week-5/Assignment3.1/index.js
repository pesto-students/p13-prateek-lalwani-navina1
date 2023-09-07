//import { add } from './calculator';
//import { substract } from './calculator';
const { add } = require('./calculator');
const { substract } = require('./calculator');

console.log('Sum is:', add(5, 2));
console.log('Difference is:', substract(5, 2));
console.log(substract(add(2, 3), 1));