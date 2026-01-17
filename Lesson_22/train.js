console.log("Jack Ma maslahatlati");
const list = [
  "yaxshi talaba boling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", // 20-30
  "ozingizga ishlashingizni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarqa investitsiya qiling", // 50-60
  "endi dam oling, foydasi yoq edi" // 60
];

async function maslahatBering(age) {
    if (typeof age !== "number") throw new Error("insert a number!") 
    else if (age <= 20 ) return list[0]
    else if (age > 20 && age <=30 ) return list[1]
    else if (age > 30 && age <=40 ) return list[2]
    else if (age > 40 && age <=50 ) return list[3]
    else if (age > 50 && age <=60 ) return list[4]
    else {
        return new Promise((resolve, reject)=>{
            setTimeout(() => { 
                resolve(list[5]);
            }, 5000);
            // return list[5]
        })
    }         
}

// console.log("Passed here...");
// maslahatBering(23)
//     .then((data)=>{
//         console.log("Javob: ", data);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// console.log("Passed here...");

run();
console.log("step 0");
async function run() {
    console.log("run function step 1");
    let javob = await maslahatBering(23);
    console.log(javob);
    console.log("run function step 2");
    javob = await maslahatBering(70);
    console.log(javob);
    javob = await maslahatBering(41);
    console.log(javob); 
}

console.log("step 1");

