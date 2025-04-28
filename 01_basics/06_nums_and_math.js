const score = 200
// console.log(score)

const balance = new Number(1123.8923)
// console.log(balance)
// console.log(balance.toString())
// console.log(balance.toString().length)

// console.log(balance.toPrecision(3))
// console.log(balance.toFixed(2))

const hundreds = new Number(10000000)
// console.log(hundreds.toLocaleString('en-in'))
// console.log(hundreds.toExponential(2))

// Math

// console.log(Math)
// console.log(Math.PI)
// console.log(Math.abs(-4))
// console.log(Math.round(4.69))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.min(4,3,5,6))
// console.log(Math.max(4,3,5,6))

console.log(Math.random())
console.log((Math.random()*10) + 1)

let min = 10
let max = 20

console.log(Math.floor(Math.random()*(max-min+1)) + min)