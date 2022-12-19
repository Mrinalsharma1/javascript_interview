// calculate the radious of each element in array
// below code is just a code to complete the job
const radius=[2,3,4,5]
// const calArea = function (radius) {
//     const output=[]
//     const output1=[]
//     const output2=[]
//     for(var i=0;i<radius.length;i++){
//         output.push(Math.PI*radius[i]*radius[i])
//         output1.push(2*Math.PI*radius[i])
//         output2.push(2*radius[i])
//     }
//     const final=[output,output1,output2]
//     return final
// }
// const out=calArea(radius)

// for(var i=0;i<out.length;i++){
//     const sub=out[i];
//     for(var j=0;j<sub.length;j++){
//         console.log(sub[j])
//     }
//     console.log("-------------")
// }

// below code is following the higerOrderFunction rules

const area=function(radius){
    return Math.PI*radius*radius
}
const carea=function(radius){
    return 2*Math.PI*radius
}
const cdime=function(radius){
    return 2*radius
}
const calculate=function(radius,logic){
    const out=[]
    for (let i = 0; i < radius.length; i++) {
        out.push(logic(radius[i]))        
    }
    return out
}
console.log(calculate(radius,area))
console.log(calculate(radius,carea))
console.log(calculate(radius,cdime))
