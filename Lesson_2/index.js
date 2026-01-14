// variable {2 types: constant and variable}
let a = 15;
// console.log(a)
a = 20;
// console.log(a);
// constant 
const b = 20 //does not change;

//function
function greeting(name) {
    console.log("hello world");
}

// greeting("Alimardon")


//function criteria: Structure & Returning & Execution

//Structure: regular, expression, arrow and auto invoke functions

//regular
// function greeting(name) {
    // console.log("Hello world!!!");
// }

//anonymous(expression)
const abc = function () {
    console.log("Hello world this is expression function!!!");
}
// abc();

//arrow 
const xyz = ()=>{
    console.log("This is an arrow function");
};
// xyz();

//auto-invoke 
// (function() {
    // console.log("hello this is an auto-invoke function");
// })();

//returning: return & void

//return 
function sum() {
    const a = 10;
    const b = 20;
    return a + b;
}

const result = sum();
// console.log(result);

//void 

function calculate() {
    const a = 11;
    const b = 2;
    console.log(a + b);
}

calculate();

//execution: asynchronous & synchronous 

//argument & parameter

// define {parameters: a and b}
function calculate(a, b) {
    return a + b;
}

// calling 
const func = calculate(1,2);
console.log(func);



// function priority
let a2 = 50;

function sum(a, b) {
    // let a2 = 50;
    return a2 + b;
}
console.log(sum(10, 20));

//at first when you call a variable inside a function it searches from inside the function
// if it finds stops there if it cannot find it searches inside the parameter if finds
// it stops there if it cannot it will search outside the function if finds it stops there 
// if it cannot find the variable it will stops there

