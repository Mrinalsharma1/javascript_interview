const arr=[5,3,2,6,7];

function double(x){
    return x*2;
}
const output=arr.map(double);
console.log(output);

const o=arr.map(function tri(x){
    return x*3;
})
console.log(o);

// filter example
// function isodd(x) {
//     // return x%2;
//     return x>4;
// }
const fout=arr.filter((x)=>{
    return x>4;
})
console.log(fout);

// reduce example
// senario in normal function
const arr1=[2,3,4,5,6];
function findsum (arr1){
    let sum=0;
    for (let i = 0; i < arr1.length; i++) {
        sum+=arr1[i]; 
    }
    return sum;
}
console.log(findsum(arr1));

//  in reduce function
const rout=arr1.reduce((acc,curr)=>{
    acc=acc+curr;
    return acc;
},0)
console.log(rout)

// find max number
const rout1=arr1.reduce((max,curr)=>{
    if(curr>max){
        max=curr;
    }
    return max;
})
console.log(rout1)

const users=[
    {fname:"ramu",lname:"kumar",age:34},
    {fname:"raj",lname:"kumar",age:64,},
    {fname:"raja",lname:"kumar",age:44,},
];
const getfname=users.map((x)=>{
    const temp=x.fname+" "+x.lname;
    return temp;
})
console.log(getfname)


const fage=users.reduce((f,curr)=>{
    if(f[curr.age]){
        f[curr.age]= ++ f[curr.age];
    }else{
        f[curr.age]=1;
    }
    return f;
},{})
console.log(fage);


const aless=users.filter((x)=> x.age>20).map((x)=>x.fname)
console.log(aless)

// const rage=users.reduce((acc,curr)=>{
//     const t=acc[curr.fname];
//     return t
//     // if(acc[curr.age]>20){
//     //     if(acc[curr.fname]){
//     //       return acc;
//     //   }
//     // }
// })
// console.log(rage)

// function product(a, b){
//     return console.log(a * b);
// }
var arrr1 = [1, 2, 3, 4, 5];
  
const a=arrr1.reduce((a,b)=>{
     return a*b
})
console.log(a)