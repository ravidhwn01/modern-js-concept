console.log(this);

// function sum(){
//     var add = 3+4;
//     console.log(add);
//     console.log(this)   // refers global object
// }
// sum()

const data = {
  name: "ravi",
  qualif: "mcs",
  sum: function () {
    var add = 3 + 4;
    console.log(add);
    console.log(this);
  },
};
data.sum();
