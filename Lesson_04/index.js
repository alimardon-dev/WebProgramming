// Naming standard: Camel, Snake, Kebab and Pascal cases

// Camel case
const yourName = "Martin";
function isPerson() {
    return true;
}
// Snake case 
const your_name = "David";
function is_person() {
    return true;
}
 
// Kebab case: your-name.ts
// mainly used for naming files

// Pascal case: class => PersonGroup (mainly for objects)

const person1 = {
    name: "Martin",
    age: 33,
}

const person2 = {
    name: "Martin",
    age: 33,
}

const person3 = {
    name: "Martin",
    age: 33,
}


class Person {
    // static variable
    static serialNumber = 123456789;
   
    // state
    name = "";
    age = 30;
    // constructor
    constructor(personName, personAge){
        this.name = personName;
        this.age = personAge;
    }
    // Method
    
    introduce(){
        console.log(`My name is ${this.name} and I am ${this.age}`);
    };

    greet(){
        console.log(`Hi, how are you`);
    };

    // static method
    static help(){
        console.log("Hi this is a static method run only using class itself not object");
    }

}

const person_1 = new Person("Alimardon", 22);
const person_2 = new Person("Martin", 52);
const person_3 = new Person("Fred", 29);

console.log(person_1.name);
console.log(person_1.age);
console.log(person_2.name);
console.log(person_2.age);
console.log(person_3.name);
console.log(person_3.age);

person_1.greet();
person_2.introduce();
person_3.introduce();
person_1.introduce();

Person.help();
const serialNumber = Person.serialNumber;
console.log(serialNumber);
console.log(Person.serialNumber);