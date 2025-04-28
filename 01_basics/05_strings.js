const name = "Aamir"
const repoCount = 43

// console.log(name + repoCount + " Value") // don't use this instead use string interpolation

console.log(`My name is ${name} and my repocount is ${repoCount}`)

const animeName = new String("DragonBall Z")
console.log(animeName)
console.log(animeName[0])
console.log(animeName.__proto__)

// console.log(animeName.length)
// console.log(animeName.toUpperCase())
// console.log(animeName.charAt(2))
// console.log(animeName.indexOf('a'))

// console.log(animeName.substring(2,5))
console.log(animeName.substring(5,2))
console.log(animeName.substring(-2,5)) // -ve numbers are treated as 0

const anotherString = animeName.slice(2,5)

console.log(animeName.slice(2,5))
console.log(animeName.slice(5,2))
console.log(animeName.slice(-5, -1))

const newStringOne = "    Hello    "
console.log(newStringOne.trim())
console.log(newStringOne.trimStart())
console.log(`${newStringOne.trimEnd()} is trimed at the end`)

const url = "https://google.com/aamir%20ahmed"
console.log(`${url.replace("%20", "-")}`)

console.log(url.includes("aamir"))
console.log(url.includes("sundar"))

const laughName = "yo-ho-h0"
console.log(laughName.split("-"))
