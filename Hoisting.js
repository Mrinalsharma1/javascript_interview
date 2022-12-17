// hoisting
// Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.
let x=5;
function demo(){
    console.log("hello");
}
demo(); //here every thing is perfect 
console.log(x);

// but when we want to use the variable before decleractio
demo1();
console.log(y); //output will be undefine in case of var but if we used other datatype like let or const the error come
// var create global block but let and const is inside script that's why its gives error
var y=6;
function demo1(){
    console.log("done");
}


