// this is about Inheritance

// parent class
class Car{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    getDetails(){
        console.log(`${this.brand} ${this.model}`);
    };
    start(){
        console.log("Start Engine ");
    };
    stop(){
        console.log("Stop Engine");
    };

    maximizeSpeed(){
        console.log("Maximal speed is not provided!");
    }
}

class Toyota extends Car{
    #fuel = 0;
    constructor(model, category, speed){
        super("Toyota", model);
        this.category = category;
        this.speed = speed; 
    }

    fillUpGazoline(a){
        this.#fuel += a; 
    };

    showGazoline(){
        console.log(this.#fuel);
    }
    maximizeSpeed(){
        console.log(`${this.model} reaches ${this.speed} km/h`);
    }

}

class Tesla extends Car{
    #battery = 0;
    constructor(model, category, speed){
        super("Tesla", model);
        this.category = category;
        this.speed = speed;
    }
    charge(b){
        this.#battery += b;
    };
    showBattery(){
        console.log(`Your battery: ${this.#battery}`);
    }
    // maximizeSpeed(){
    //     console.log(`${this.model} reaches ${this.speed} km/h`);
    // }
}

const yourCar = new Tesla("Tesla", "sedan", 250);
yourCar.start();
yourCar.stop();
yourCar.charge(40);
yourCar.showBattery();
yourCar.maximizeSpeed();

console.log("====================");

const myCar = new Toyota("Camry", "sedan", 220);
myCar.start();
myCar.stop();
myCar.fillUpGazoline(20);
myCar.showGazoline();
myCar.maximizeSpeed();

const car = new Car("Toyota", "Camry");
car.maximizeSpeed();
