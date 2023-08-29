//Section 1 - Inheritance:

class Vehicle {
    constructor(make, model, year, color) {
        this.make = make,
        this.model = model,
        this.year = year,
        this.color=color    
    }
    drive() {
        console.log(`Driving ${make} ${model}`)
    }
}

class Car extends Vehicle{
    constructor(make, model, year, color, numSeats) {
        super(make, model, year, color);
        this.numSeats = numSeats;
    }
}

class RideShareCar extends Vehicle{
    constructor(make, model, year, color, isAvailable) {
        super(make, model, year, color)
        this.isAvailable = isAvailable;
    }
}