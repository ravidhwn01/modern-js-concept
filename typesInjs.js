const array = [1,2,3];
console.log(array);
const arryobj ={
    0:1,
    1:2,
    2:3
}
console.log(arryobj)

console.log(Array.isArray(array));  // true
console.log(Array.isArray(arryobj)); // false
//The Array.isArray() static method determines whether the passed value is an Array.


const arr1  = [1,2,3,4];
const arr2 = [].concat(arr1);  // array copy ho gya
// const arr2 = arr1;  // reference mil gya
arr2.push(45)
console.log(arr1)
console.log(arr2)
