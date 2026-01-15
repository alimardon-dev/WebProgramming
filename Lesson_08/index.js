// foreach, map, filter => immutable function
// these functions does not change the array itself


const list = [1,2,4,5,6,6,7,8,8];


//map function takes each element and return a new values using a function
// here arrow function is used so it does not require to call it later to run
// it runs automatically right after it is made 
const newList = list.map((ele, index)=>{
    console.log(`${index} => ${ele}`);
    return ele > 4?4:null;
    return ele * ele;
});

// printing the new array
console.log(newList);


console.log("--------------------------");


const newList2 = list.filter((ele, index)=>{
    return ele % 2 == 0;
});

console.log(newList2);

console.log("--------------------------");

// reduce, some, every
const numbers = [2,12,3,4,5,6,7];

console.log(numbers);
// this function turns array into one value
const result = numbers.reduce((total, curValue, curIndex) => {
    console.log(curIndex, curValue);
    console.log(total);
    return total + curValue;
}, 10);
console.log(result);

console.log("-------------");

// some function
// even one item is under given condition it returns true value
const resultSome = numbers.some((ele, index)=>{
    console.log(index, ele);
    return ele === 4; 
})
console.log(resultSome);

console.log("-------------");

// every function
// if every element is under this condition it returns true otherwise false 
const everyResult = numbers.every((ele, index)=>{
    return ele > 0;
})

console.log(everyResult);








