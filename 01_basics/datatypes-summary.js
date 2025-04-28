// Primitive

// 7 types: String, Number, BigInt, Boolean, Null, Undefined, Symbol

const id = Symbol(123)
const anotherId = Symbol("123")
// console.table([id, anotherId, id == anotherId])

const bigNumber = 123455556677n;
// console.log(bigNumber)

// Reference (Non Primitive)

// Array, Objects, Functions

const fruits = ['apple', 'mango', 'orange']
let myObj = {
    "name": 'Aamir',
    "age": 22
}

const myFunction = function(){
    console.log("hello world")
    return 1
}

// console.table([fruits, myObj, myFunction()])

// console.log(typeof myFunction) // function

// javascript is a dynamically typed language

// stack (Primitive), Heap (Non-Primitive)

let name1 = "Aamir"
let name2 = name1
name2 = "Ahmed"

// console.log(name1, name2)

let userOne = {
    name: "Aamir",
    age: 22
}

let userTwo = userOne

userTwo.name = "Ahmed"
userOne.age = -1

console.table([userOne, userTwo])