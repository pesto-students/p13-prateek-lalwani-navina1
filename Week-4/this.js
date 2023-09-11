class Person {
    constructor(name, age, gender, nationality) {
        this.name = name,
            this.age = age,
            this.gender = gender,
            this.nationality = nationality
    }
    introduce() {
        return `My name is ${this.name}, I am ${this.age} years old, I am ${this.gender} and I am ${this.nationality}.`
    }
}

const person1 = new Person("Anu", 17, "female", "indian");
const person2 = new Person("sandra", 22, "female", "British");
const person3 = new Person("Neo", 3, "male", "Australian");

console.log(person1.introduce());
console.log(person2.introduce());
console.log(person3.introduce());

class Student extends Person {
    constructor(name, age, gender, nationality, subject) {
        super(name, age, gender, nationality);
        this.subject = subject;
    }
    study() {
        return `I am studying ${this.subject}`
    }

}

const student1 = new Student("Charlie", 20, "Male", "Canada", "Computer Science");
console.log(student1.introduce(), student1.study());