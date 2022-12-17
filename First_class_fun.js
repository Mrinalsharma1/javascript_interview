// a function which can return a function as a argument
// var a=function(){
//     return(function (){console.log("return")})
// }
// console.log(a());

var b=function (param1){
    console.log(param1);
}
b(function demo(){console.log("argu")})


