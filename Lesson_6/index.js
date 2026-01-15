// scope - variable
let c = 0;

function calculate(a, b) {
    c = a + b;
    return c + b;
}

console.log(c);
calculate(1,2);
console.log(c);
console.log(calculate(1,5));

//context - object

const person = {
    name: "Haru",
    age: 30,
    nation: "Korean",
    greet(){
        console.log("Hi, how do you do");
    },
    introduce(){
        console.log(`My name is ${this.name}, I am ${this.age}!`);
        // arrow function can read the variable that starts with this so it is useful in this kind of contexts 
        const sayYourAge = () => {
            console.log(`I am ${this.age} years old`);
        };
        sayYourAge();
    },
}

person.greet();
person.introduce();


//just a function nothing special
function greet() {
    console.log(this.name);
}

greet();