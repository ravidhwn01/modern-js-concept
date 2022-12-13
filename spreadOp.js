"use strict"
//spread operator
//spread operator is used to split up array elements or object properties

// examples
const oldArray = [1, 2, 3];
const oldObject = {prop: 1, prop2: 2};
const newArray = [...oldArray, 1, 2];
const newObject = {...oldObject, newProp: 5};

console.log(newArray);
console.log(newObject)

function demo([...para]){
    // console.log(para);
    let sum = 0;
        for (let i = 0; i < para.length; i++) {
            sum += para[i];
        }
        console.log(sum);
}
demo([1,2,3,4,5,6,7,8,9,10])