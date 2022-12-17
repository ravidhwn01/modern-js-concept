
 function  ram(){
    return  new  Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`ram is good boy`);
            resolve();
        }, 2000);
    });
 }
 ram();

 //asynchronous programming in js
    //Path: async.js
    // A Promise is an object that keep track about whether
    // a certain event has happened already or not.


    // Promise states
    // 1. Pending
    // 2. Fulfilled
    // 3. Rejected

    // Promise is a constructor function
    // Promise takes a function as an argument
    // This function takes two parameters resolve and reject
    // resolve and reject are also functions
    const promiseObj  = new Promise((resolve,reject)=>{
        // resolve();
        setTimeout(() => {
            let rollNo = [1,2,3,4,5]
            resolve(rollNo);
            reject(`error while fetching data`)
        }, 2000);
    })



promiseObj.then((rollNo)=>{
    console.log(`Success: ${rollNo}`);
}).catch((e)=>{
    console.log(`Error: ${e}`);
})

