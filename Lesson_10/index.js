// loops:
    // while 
    // for 


let count = 0;
while (count <=100 ) {
    console.log(count);
    count++;
}

console.log("--------------------------");

for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log('--------------------------');

const fruits = ["apple", "banana", "mango", "lemon"];
fruits.map((ele, index)=>{
    console.log(index, ele);
});


// using of keyword 
for (const ele of fruits){
    console.log(ele);
}

// using in keyword
for (const index in fruits){
    console.log(index);
}
