// Higher-order functions are functions that take other functions as
// arguments or return functions as their results.

const IntrQ = (name)=>{
    if(name=="ravi"){
        return function(topic){
            console.log(`hello ${name}! plz tell us about ${topic}`);
        }
    }
    else if(name=="raj"){
        return function(topic){
            console.log(`hello ${name}! plz tell us about ${topic}`);
        }
    }
    else if(name=="ram"){
        return function(topic){
            console.log(`hello ${name}! plz tell us about ${topic}`);
        }
    }
    else{
        return function(topic){
            console.log("welcome to interview.");
        }
    }
}
//method 1
IntrQ("ravi")("full stack development");
IntrQ("raj")("UI");
IntrQ("ram")("DSA");
IntrQ("")("");

//method 2 we can ask multiple qna to a candidate
 const cand1 = IntrQ("ravi")
 cand1("dsa")
 cand1("ux")
 cand1("kali")
 cand1("python")