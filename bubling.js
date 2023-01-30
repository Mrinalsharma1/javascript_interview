var div = document.querySelector("div");
var butt = document.querySelector("button");
var a = document.querySelector("a");
div.addEventListener("click", (e) => {
    console.log("div")
})//that's method is called event bubling child to parents if we will true the call back then its become capturing
butt.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("button")
})

butt.addEventListener("click", (e) => {
    e.stopImmediatePropagation() //after that it will not go for another button
    console.log("button1")
})
a.addEventListener("click", (e) => {
    e.preventDefault() //it will stop reloading the page
    console.log("A")
})
