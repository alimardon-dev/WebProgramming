//this file is about Encapsulation
class Account {
    //state
    // if there is nothing before the variable it is public
    // if there is # it is private so that it cannot be changed outside the function
    #owner; //private
    #amount; //private
    currency;
    
    //contructor
    constructor(owner, amount, currency = "usd"){
        this.#owner = owner;
        this.#amount = amount;
        this.currency = currency;
    }

    //method 
    checkbalance(){
        console.log(`Hi ${this.#owner}, your account balance: ${this.#amount} ${this.currency}`);
        this.#test();
    }

    deposit(amount){
        this.#amount += amount;
    }

    #test(){
        console.log("This works only inside the class not outside");
    }

}


const myAccount = new Account("David", 1000);

myAccount.owner = "Alimardon";
myAccount.amount = 50000;
console.log(myAccount.owner);


myAccount.checkbalance();
myAccount.deposit(100);
myAccount.checkbalance();

console.log("=================");

myAccount.deposit(1000);
myAccount.checkbalance();



// Encapsulation: public, private and protected;
