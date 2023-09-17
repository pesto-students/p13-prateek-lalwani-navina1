//Map

// let myMap=new Map();
// myMap.set(1,"abc");
// myMap.set(2,100);
// console.log(myMap.get(2));
// console.log(myMap.has(4));
// console.log(myMap.size);
// myMap.clear();
// console.log(myMap.size);

//weakMap

// let myWeakMap = new WeakMap();
// const key = { name: "abc", age: 21 };

// myWeakMap.set(key, 21); // Use the same key object
// console.log(myWeakMap.get(key)); // Retrieve the value using the same key
// console.log(myWeakMap.has(key));


// //set
// let mySet=new Set();
// mySet.add("abc");
// mySet.add(5);
// console.log(mySet)

//weak Set
let myWeakSet=new WeakSet();
let a={name:"abc",key:1};
myWeakSet.add(a);
console.log(myWeakSet)