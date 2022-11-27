// var a = "hello guys"
// function f1(){
//     var b = "how are you..."
//     f2();
//     function f2(){
//         var c = "dkfjdfsd asjdf"
//         console.log(a+b+c);
//     }
// }
// f1();

"use strict"
function sum(a,b){   // we can not pass same parameter (a,a) in use strict mode
    var add= a+b;
    console.log(add)
}
sum(3,5);