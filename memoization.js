let sum = 0
// withour memoization
const calc = (n) => {
    for (let index = 0; index <= n; index++) {
        sum += index
    }
    return sum
}

// with memoization
const memoize = (fun) => {
    let cache = {}
    return function (...args) {
        let n = args[0]
        console.log(cache)
        if (n in cache) {
            console.log("cache")
            return cache[n]
        } else {
            console.log("calculated first time")
            let result = fun(n)
            cache[n] = result
            return result
        }
    }

}

// console.time()
// console.log(calc(5))
// console.timeEnd()

console.time()
const fun = memoize(calc)
console.log(fun(5))
console.timeEnd()

console.time()
// const fun = memoize(calc)
console.log(fun(5))
console.timeEnd()