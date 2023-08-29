//Protecting the Object
const person = {
    getAge: function () {
        return this.age;
    },
    setAge: function (age) {
        this.age=age
    }
};
Object.defineProperty(person, "name", {
    value: "Anu",
    writable: false
});
Object.defineProperty(person, "email", {
    value: "Anu@gmail.com",
    writable: false
});
Object.defineProperty(person, "age", {
    value: 21
});
// person.getAge = function () {
//     return this.age;
// }
// person.setAge = function (age) {
//     this.age = age;
// }

//Testing
console.log("Name:", person.name);
console.log("Email:", person.email);
person.name = "sandra";
console.log("Updated Name:", person.name);

console.log(person.age);
//person.age = 31;
console.log(person.age);
console.log("using getAge():", person.getAge());
person.setAge(45);
console.log("After using setAge, Age:", person.getAge());