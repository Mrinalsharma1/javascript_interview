let userData = {
    name: "Mrinal",
    age: 24,
    Designation: "Software Engineering",
    // printDetails: function () {
    //     console.log(this)
    // } what if this method is outside
}
let printDetails = function (state, country) {
    console.log(this.name + " " + state + " " + country)
}
printDetails.call(userData, "patna", "india")

let userData1 = {
    name: "rohan",
    age: 22,
    Designation: "Software Engineering 1",
    // printDetails: function () {
    //     console.log(this.name)
    // } here i don't want to use this function again 
}
// call 
printDetails.call(userData1, "delhi", "india") //to access this we can use call method

// apply
printDetails.apply(userData1, ["mumbai", "india"]) //apply method can pass list of array

// bind
let temp = printDetails.bind(userData1, "bind", "india") //bind method create a copy of function and later we can use
temp()