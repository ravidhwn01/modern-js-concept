// The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty elements.
"use strict"

let arr = [1,3,5,7,9];
// we can render arr using for loop also but forEach is better than for loop
arr.forEach((element,index,arr) => {
    console.log(element,index,arr);
});