function Vehicle(make,model,year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
Vehicle.prototype.getDetails = function () {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
}
class Car extends Vehicle{
    constructor(make, model, year,numDoors) {
        super(make, model, year);
        this.numDoors = numDoors;
    }
    getDetails() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Number of Doors:${this.numDoors}`;
    }
}

const vehicleInstance = new Vehicle("make1", "aulto", "2020");
const carInstance = new Car("make2", "Car", "2023", 4);
console.log(vehicleInstance.getDetails());
console.log(carInstance.getDetails());

