// The Destructuring assignment syntax is a
// Javascript expression that makes it possible
// to unpack values from arrays, or properties
// om objects, into distinct variables.
"use strict"
let myData = {
    user: "John",
    age: 30,
    pet: "dog",
    work: "developer"
}
const {user,age,pet,work} = myData;
console.log(`${user},${age},${work},${pet}`);