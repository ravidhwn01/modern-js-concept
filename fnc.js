// const ravi = function(){
//     console.log("Hello Ravi");
// }
// ravi(); // hello ravi
// console.log(ravi); 
/**
 * ƒ (){
    console.log("Hello Ravi");
}
 */ 
//  First Class Citizen Function in JavaScript
const yt = {
    name: "Ravi",
    videos: ["html", "css", "js"],
    qualif: function(){
        console.log("User logged in");
    }

}
console.log(yt);
console.log(yt.qualif);
yt.qualif();

// use function as a value // callback function

const myfun  = ()=>{
   return "Ravi";
}
const greeting = (lal,name)=>{
    console.log(" hello "+lal() + name);
}
greeting(myfun," dhawan");   // myfun is callback fun here

// function as a return value
function a(){
    return function b(){
        console.log("hello world");
    }
}

a()(); // hello world
const c = a();
c(); // hello world