// Immediately Invoked Function Expression
// It is a design pattern which is also known as a Self-Executing Anonymous
// Function and contains two major parts
// The first is the anonymous function with lexical scope enclosed within the Gr
// Q. This prevents accessing variables within the IIFE idiom as well as polluting
// The second part creates the immediately invoked function expression () through
// JavaScript engine will directly interpret the function.


(
    function(){
        var name = "ravi"
        console.log(`author is ${name}`)
    }
)();

// console.log(name);    // can not access name here