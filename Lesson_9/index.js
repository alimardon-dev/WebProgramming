const a = 1;

const b = 0
console.log(a > b);

console.log("-------------------");

// truthy values: 3, "hello", true
// falsy values: false, null, 0, "", '', ``, undefined

const value = 5;
console.log(!!value);

const value1 = 0;
console.log("Falsy values: ");
console.log(!!value1);


const value2 = 5;
console.log(!value2);

const value3 = 0;
console.log(!value3);



console.log("-------------------");
// turnary operator
const number = -5;
const sign = number > 0? "positive" : "negative";

console.log(sign);


console.log("------------------");


// nullish operator

const value4 = null;
const nullishness = value4 ?? 100;

console.log(nullishness);






// conditions: If, switch

const apple = 100;

if (apple >= 100) {
    console.log("you have more then 100 apples");
}else{
    console.log("You have less than 100 apples");
}


console.log("----------------");

const grade = "B+";

switch (grade) {
    case "A+":
        console.log("You are the best student");
        break;
    case "A":
        console.log("You are a good student");
    default:
        console.log("Study more bitch");
        break;
}
