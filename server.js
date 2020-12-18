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

app.get('/', (req, res) => {
    res.send("hello world")
})


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})