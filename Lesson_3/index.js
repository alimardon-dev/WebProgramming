// Programming paradigms: functional programming and OOP

// Big 4 concepts: Abstraction & Encapsulation & Inheritance & Polymorphism

// Object built via literal method
const person = {
    name: "David",
    age: 30,
    nationality: "Australian",
    greet(){
        console.log("Hi, How are you?");
    },
    introduce(){
        console.log(`My name is ${this.name} and I am ${this.age} years old!!!`);
    },
}

// keys: name, age and nationality
// values: David, 30 and Australian 

const a = person.name;
// console.log(a);

const age = person.age;
// console.log(age);

// person.greet();
// person.introduce();

// Primitive and Object Variables

// Primitive variables: no reference they have only value
const a1 = "David";
const b1 = 30;
const c1 = true;

// Object variables
// object has reference and value while primitive has only value
const person1 = {
    name: "Robert",
    age: 32,
}
// person2 and person1 have same reference so their values and their location are in the same memory 
const person2 = person1;
person2.name = "Fred";
// console.log(person1.name)
// console.log(person2.name)
// both of them changes their values at the same time because they share the same reference

// spread operator: person3 now has new reference   
const person3 = {...person1}
person3.name = "Alimardon";
console.log("Hello ", person3.name);
console.log(`Hello ${person1.name}`);


// building an object using constructor

const obj = new Object();
obj.name = "David";
obj.age = 30;
obj.hobby = "playing chess";

console.log(`My name is ${obj.name} and I am ${obj.age}. And I like ${obj.hobby}!`);
 

const keys = Object.keys(obj);
const values = Object.values(obj);
console.log("===================");
console.log(keys);
console.log("===================");
console.log(values);