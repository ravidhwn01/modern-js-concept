// hoisting in javascript
sun(3,53);  // fun calling  not working in arrow fun

// function sun(a,b){
  //   add = a+b;
  //   console.log(add);
  // }
  
  const sun = (a,b)=>{
    add = a+b;
    console.log(add);
  }
  sun(3,53);  // fun calling