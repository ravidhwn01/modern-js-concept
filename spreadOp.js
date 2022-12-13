//spread operator
//spread operator is used to split up array elements or object properties

// examples
const oldArray = [1, 2, 3];
const oldObject = {prop: 1, prop2: 2};
const newArray = [...oldArray, 1, 2];
const newObject = {...oldObject, newProp: 5};

console.log(newArray);
console.log(newObject)