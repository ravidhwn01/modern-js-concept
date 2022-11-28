const manA  = (frnd,callfrnd)=>{
    console.log(`i am busy right now. ${frnd} `)
    callfrnd();
}
const manB = ()=>{
    console.log('i am free now. call me')
}
manA('ravi',manB);

/**
 * Any function that is passed as an argument is called a callback function.
A callback is a function that is to be executed after another function has
finished executing-
hence the name 'call back.
 */

// anonymous function in js 🔥