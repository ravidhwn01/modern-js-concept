// The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty elements.
"use strict"

let arr = [1,3,5,7,9];
// we can render arr using for loop also but forEach is better than for loop
arr.forEach((element,index,arr) => {
    console.log(element,index,arr);
});

// iterators in js (array and strings)
// iterators are objects which have next() method
// next() method returns an object with two properties
// 1. value
// 2. done
// value is the next element in the sequence
// done is true if the last element in the sequence has been reached otherwise false
let monk = "this is my pet!"
for(let item of monk){
    console.log(item);
}