// norma setTimeout example
// function demo(){
//     var x=5;
//     setTimeout(function(){
//         console.log(x);
//     },2000);
//     console.log("welcome to js")
// }
// demo();

// print 1to 5 after each sec without var its okk
// for(let i=1;i<=5;i++){
//     function demo(){
//         setTimeout(function(){
//             console.log(i)
//         },i*1000)
//     }
//     demo();
// }

// print 1 to 5 after each sec with var
// function a(){
//     for(var i=1;i<=5;i++){
//         function demo(x){
//             setTimeout(function(){
//                 console.log(x)
//             },x*1000)
//         }
//        demo(i);
//     }
//     console.log("welcome to js")
// }
// a()

console.log("first")
function abc() {
    setTimeout(function a() {
        console.log("hey");
    },0)
}
abc()
console.log("Last")