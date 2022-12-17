 function  ram(){
    return  new  Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`ram is good boy`);
            resolve();
        }, 2000);
    });
 }
 ram();