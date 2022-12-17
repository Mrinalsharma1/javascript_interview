// basic example of closure
// function a(){
//     let x=7;
//     function b(){
//         console.log(x);
//     }
//     b();
// }
// a();

function a(){
    let x=6;
    // function b(){ //either write like this on dicrect return the function
    //     console.log(x);
    // }
    // return b;
    return function b(){
        console.log(x);
    }
}
const c=a();
console.log(c());