The lesson is about Asynchronous functions.
Inside Asynchronous functions settimeout function does not work.
if Asynchronous function takes time the program just skips the function
and when the Asynchronous function is ready it will show up later.
Settimeout() function works only inside the promise(resolve, reject) function
Asynchronous functions work in the background. 

what I learnt:
    Async
    Await
    Promise


// // function test(a) {
// //     console.log(a);
// // }
// // // calling test function
// // test("hello", (err, data) => {
// //     console.log(err)
// // })

// // test()

// // test1(1,2, test);
function getIceCream() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍦 Ice cream is ready!");
    }, 5000);
  });
}

async function eatIceCream() {
  console.log("Waiting for ice cream...");
  
  const iceCream = await getIceCream(); // wait here (but JS doesn't freeze)
  
  console.log(iceCream);
  console.log("Yummy 😋"); 
}
console.log("Step 1")
eatIceCream();
console.log("Step 2")
