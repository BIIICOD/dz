// function dz1(){
//     /*
//     1. Print out "Program started" at the start of your code
//     2. Create a Promise that resolves after 3 seconds
//        and rejects after 2 seconds
//     3. Log out the promise while it's pending
//     4. Print out "Program in progress..." as well

//     5. Print out "Program complete" if the promise fulfills
//     6. Print out "Program failure" if the promise rejects

//     HINT: Use setTimeout for the delay
//     */

//     console.log('Program started');

//     let promise = new Promise((resolve, reject) => {
//         console.log('Program in progres...');
//         setTimeout(() => {
//             resolve('Program fulfills');
//           }, 3000);

//         setTimeout(() => {
//             reject('Program failure');
//         }, 2000);
//     });

//     promise.then((data) => {
//         console.log(data);
//     }).catch((data) => {
//         console.log(data);
//     })
// }

// dz1();


// function dz2(){
//     /*
//     1. Print out "Program started" at the start of your code
//     2. Create a Promise that resolves after 3 seconds
//     3. Log out the promise while it's pending
//     4. Print out "Program in progress..." as well

//     5. Print out "Step 1 complete" when the first promise fulfills
//     6. Have the first promise return another new Promise that will
//        fulfill after 3 seconds with the message: "Step 2 Complete"

//     7. Print out the message from the second promise after it
//        fulfills ("Step 2 Complete")

//     HINT: Use setTimeout for the delay
//     */

//     console.log('Program started');

//     let promise = new Promise((resolve, reject) => {
//         console.log('Program in progres...');
//         setTimeout(() => {
//             resolve('Step 1 complete');
//           }, 3000);
//     });


//     promise.then((data) => {
//         console.log(data);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve('Step 2 complete');
//               }, 3000);
//         });
//     }).then((data) => {
//         console.log(data); 
//     }).catch((data) => {
//         console.log(data);
//     })
// }

// dz2();


function dz3(){
    /*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 5 seconds with the
       value {data: "Hello, friend!", error: null}
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Create a first Promise chain using the promise above and
       Print out the resolved value when the first promise fulfills
    6. Have this first promise return another new Promise that will
       fulfill after 2 seconds with the message:
       "First promise chain complete!"
    7. Print out the message from the above promise after it
       fulfills ("First promise chain complete!")

    8. Create a second Promise chain using the first promise above and
       Print out the resolved value when the second promise fulfills
    9. Have this second promise return another new Promise that will
       fulfill after 10 seconds with the message:
       "Second promise chain complete!"
   10. Print out the message from the above promise after it
       fulfills ("Second promise chain complete!")

    HINT: Use setTimeout for the delay
    HINT2: This will be using the same promise two times:
           const myPromise = new Promise(...) // step 2
           myPromise.then(...).then(...) // steps 5-7
           myPromise.then(...).then(...) // steps 8-10

    BONUS: WHY does it work this way?
    */

    console.log('Program started');

    const promise = new Promise((resolve, reject) => {
        console.log('Program in progres...');
        setTimeout(() => {
            resolve({data: "Hello, friend!", error: null});
          }, 5000);
    });

    const promise2 = new Promise((resolve, reject) => {       
        setTimeout(() => {
            resolve("First promise chain complete!");
        }, 2000);
    });

    const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Second promise chain complete!");
        }, 10000);
    });


    promise.then((data) => {
        promise2.then((secdata) => {
            console.log(secdata); 
            console.log(data);
            return promise3;
        }).then((data) => {
            console.log(data);
        })
    }).catch((data) => {
        console.log(data);
    })
}

dz3();
