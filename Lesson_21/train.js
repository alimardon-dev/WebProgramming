console.log("Jack Ma maslahatlati");

const list = [
  "yaxshi talaba boling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", // 20-30
  "ozingizga ishlashingizni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarqa investitsiya qiling", // 50-60
  "endi dam oling, foydasi yoq edi" // 60
];

function maslahatBering(age, callback) {
    if (typeof age !== "number") callback("insert a number!", null) 
    else if (age <= 20 ) callback(null, list[0])
    else if (age > 20 && age <=30 ) callback(null, list[1])
    else if (age > 30 && age <=40 ) callback(null, list[2])
    else if (age > 40 && age <=50 ) callback(null, list[3])
    else if (age > 50 && age <=60 ) callback(null, list[4])
    else {
        setTimeout(() => {
            callback(null, list[5])
            
        }, 5000);
    }         
}

console.log("Passed here...");
maslahatBering(78, (err, data)=>{
    if (err) console.log("ERROR: ", err);
    console.log(`Javob: ${data}`);
})

console.log("Passed here...");