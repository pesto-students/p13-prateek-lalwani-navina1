

//Section 2 - Polymorphism:

class Shape{
    calculateArea() {
        
    }
}
class Rectangle extends Shape{
    constructor(height, width) {
        super(),
        this.height = height,
        this.width=width
    }
    calculateArea() {
        return this.height*this.width
    }
}
class Triangle extends Shape{
    
    constructor(base, height) {
        super(),
        this.base = base,
        this.height=height
    }
    calculateArea() {
        return 0.5 * this.base * this.height;
    }
}
class Circle extends Shape{
    constructor(radius) {
        super(),
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
const rectangle = new Rectangle(5, 10);
console.log(`Rectangle Are:`, rectangle.calculateArea());

const triangle = new Triangle(2, 4);
console.log('Triangle Area:', triangle.calculateArea())

const circle = new Circle(4);
console.log('Circle area', circle.calculateArea())