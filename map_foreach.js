let arr = [2,4,6,8,10]
var newarr = arr.map((e)=>e*2)// map

//for each
var forarr = arr.forEach((part,index,theArray)=>{
    theArray[index]=part+1
});
console.log(arr)

arr.forEach((e,i,a)=> {
    a[i]=e*100;
});

console.log(arr)