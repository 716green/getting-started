const express = require('express')
const app = express()
const port = 3000


let myVar = 'Hello World';
console.log(myVar)

function print(whatToPrint) {
    console.log(whatToPrint)
}

print("Just like Python!");

// Immediately Invoked Function
(function printMe() {
    console.log(myVar + " immediately invoked")
})()

var myOldVariable = "Old Variable"
let myNewChangableVar = "This value can change"
const myNewConstant = "This value can not change"
console.table({
    var: myOldVariable,
    let: myNewChangableVar,
    const: myNewConstant
})

myOldVariable = "We don't like the var keyword anymore"
myNewChangableVar = "let is a lot better"
    // uncommenting the next line will cause an error
    // myNewConstant = "this won't work"

console.table({
    var: myOldVariable,
    let: myNewChangableVar,
    const: myNewConstant + ' (Same as before)'
})

console.log({
    varVariable,
})

var varVariable = 'var'
let letVariable = 'let'
const constVariable = 'covarVariablenst'

let myArray = ['start', 'dog', 'cat', 10, '10', 20, '20', 'aardvark', 'bird', 30, '30', 'end']
console.log(myArray)
console.log(myArray[0])
console.log(myArray.length)
console.log(myArray[myArray.length - 1])
let sortedArray = myArray.sort()
console.log(sortedArray)
let doesItMatch = sortedArray[0] == sortedArray[1]
let doesItMatchStrict = sortedArray[0] === sortedArray[1]
console.log(doesItMatch ? `${sortedArray[0]} == ${sortedArray[1]}` : 'No Match')
console.log(doesItMatch)
console.log(doesItMatchStrict ? 'match' : `${sortedArray[0]} === ${sortedArray[1]}`)
console.log(doesItMatchStrict)
myArray.forEach((item, i) => console.log('item ', i, ' is ', item))

app.get('/', (req, res) => {
    res.send("hello world")
})


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})