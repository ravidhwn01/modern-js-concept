function A() {
  var fa = "2nd fun o/p1";
  console.log(fa);
  debugger;
  b();
  console.log("let see when i will be on console");
}
function b() {
  debugger;
  console.log("2nd fun o/p2");
  c();
}
function c() {
  debugger;
  console.log("3rd fun o/p3");
}
debugger;
A();
