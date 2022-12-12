 function multiply(a,b = 2){
    console.log(a*b);
 }

 multiply(34);

 // why rest parameter
 // all parameter take 

    function sum(...args){
        console.log(...args);  // returns values of an array
        console.log(args)     // returns an array
        let sum = 0;
        for (let i = 0; i < args.length; i++) {
            sum += args[i];
        }
        console.log(sum);
    }
sum(1,2,3,4,5,6,7,8,9,10);