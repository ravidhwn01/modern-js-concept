// closure in javascript

// closure in action that is inner function can have access to the outer
// function variables as well as all the global variables. and parameter also

const outer  = (b)=>{
    const a = 234;
    const innerFunc = ()=>{
        let sum = a+b;
        console.log(`the sum is ${sum}`)
    }
    // innerFunc();
    return innerFunc; // innerFunc did not called 
}
outer(44);


// exercise on closure 
