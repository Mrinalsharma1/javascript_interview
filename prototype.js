const obj1 = {
    name: "ranjan kumar",
    roll: 34
}
const obj2 = {
    name: "mohan",
    course: "MCA",
    __proto__: obj1 //with this we can access obj1 properties
}
const obj3 = {
    fee: 3000,
    __proto__: obj2 //inherit obj2 properties
}
// console.log(obj2.name) //access obj1 with the help of obj2 object when name will be not in obj2
// console.log(obj2.roll) //access obj2 properties
// console.log(obj3.name, obj3.roll, obj3.course, obj3.fee)//we can access all the object value 

Array.prototype.show = function () { //with that you can create your own prototype method
    return this
}
const cities = ["delhi", "patna"]
console.log(cities.show()) // here we are calling our own created prototype show()

Array.prototype.convertIntoObject = function () { //here i created our own prototype
    let obj = {}
    this.forEach((element) => {
        obj[element] = element
    })
    return obj
}
console.log(cities.convertIntoObject()) //here we converted array to object