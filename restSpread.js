// ES6 Properties
//both example in term of Array
// example REST
// in rest reciving parameter as a group of value
function addNum(a,b,...num) {
    console.log(num);
    return a+b;
}
const res=addNum(2,3,4,5,6,7,8);
console.log(res);

// // Example Spread
console.log("-----------------")
var names=["ajay","mohan","raj"];
function getName(...a) {
    console.log(a)
}
getName(names[0],names[1],names[2])//one way to pass argument
getName(...names)//that's called rest operator
getName(names)

//obj ke sath -> Rest
var std={name:"raju",
        age:23,
        hobbies:["cricket","caram"]
}
const {age,name}=std
console.log(age,name)//obj destructing
const {...rest}=std;//rest means combine
console.log(rest)

// Spread ex
var newStd={
    ...std,
    age:"40"
}
console.log(newStd)