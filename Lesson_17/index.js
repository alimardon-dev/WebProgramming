// const calculate = require('./hisob.js');
 
// const natija = calculate.kopaytirish(1,3);
// const natija1 = calculate.qoshish(1,3);
// const natija2 = calculate.ayirish(3,3);
// const natija3 = calculate.bolish(3,3);
// console.log(natija);
// console.log(natija1);
// console.log(natija2);
// console.log(natija3);

// console.log("--------------------");


// console.log(require("module").wrapper);

// console.log("--------------------");

// //printing the arguments
// console.log(arguments);

console.log("----------------------------");





///////////////////////////////////
const Account = require("./account");
Account.tellMeTime();
Account.tellMeAboutClass();
const myAccount = new Account("Alimardon", 2000, 123456789);
myAccount.deposit(4100);
myAccount.withdraw(500);
myAccount.giveMeDetails();
console.log("Account holder name is", myAccount.name);

myAccount.withdraw(50000000);





