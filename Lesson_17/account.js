const moment = require("moment");

class Account {
    name;
    #amount;
    #account_id

    constructor(name, amount, account_id){
        this.#account_id = account_id;
        this.#amount = amount;
        this.name = name;
    };
    tellMeBalance(){
        console.log(`Your balance: ${this.#amount}`);
        return this.#amount;
    }
    withdraw(amount){
        if (this.#amount > amount) {
            this.#amount -= amount
            console.log(`Hisobdan ${amount} yechib olindi. Qoldiq: ${this.#amount}`);
        }else{
            console.log("Sizning balansingizda pul yetarli emas: ", this.#amount);
        }
    }
    deposit(amount){
        this.#amount += amount;
        console.log(`Sizning balansingiz toldirildi: ${this.#amount}`);
    }
    giveMeDetails(){
        console.log(`Hello ${this.name}, sizning hisobingiz: ${this.#amount}`);
        console.log(`Sizning hisob raqamingiz: ${this.#account_id}`);
    }
    static tellMeAboutClass(){
        console.log("Bu class bank tizimi uchun ishlaydi!");
    };

    static tellMeTime(){
        const time = moment().format("YYYY-MM-DD HH:mm");
        console.log("Current time: ", time); 
    };
}

module.exports = Account;
