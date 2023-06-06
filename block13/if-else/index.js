//My Practice if/else statement-------------------------------------------------------------

// step 1: define which day "today" is in a let statement
// step 2: select a different day for "today" and use the strict equality operator in the if statement to compare both values/data types
// step 3: return a response if the statement is true, if false, return a response in the else statement

// let today = "Thursday"

// if(today == "Wednesday"){
//     console.log(true)
// }
// else {
//     console.log(false)
// }

//Is Truthy---------------------------------------------------------------------------------

// step 1: use an if statement to determine if the value is true or false
// step 2: if the value is false, use the else statement and print the appropriate response in a console.log


if("I am a string"){
    console.log(true)
}
else{
    console.log(false)
}

if(false){
    console.log(true)
}
    else{
    console.log("The boolean value false is falsy")
}

if(null){
    console.log(true)
}
else{
    console.log("The null value is falsy")
}
if(undefined){
    console.log(true)
}
else{
    console.log("undefined is falsy")
}

if("0"){
    console.log("The number 0 is falsy (the only falsy number)")
}
else{
    console.log(true)
}
if('""'){
    console.log("The empty string is falsy (the only falsy string)")
}
else{
    console.log(true)
}

//Number Line-------------------------------------------------------------------------------

// step 1: define a let statement that has the desired amount
// step 2: create an if statment that uses two values that equal the sum amount
// step 3: return a console.log message that reflects the result of sum

if(50+51>100){
    console.log("101 is greater than 100")
}

if(sum = 99 + -2){
    console.log(sum + " is greater than 0")
}

if(sum = 0 + 101){
    console.log( sum + " is greater than 100")
}

//???QUESTION???
if(sum = 500 + -500 == 0){
    console.log("0 is equal to 0")
}

if(sum = -1000 + 0){
    console.log(sum + " is a negative number")
}

if(sum = -5 + 0){
    console.log(sum + " is a negative number")
}
//Greater than 5-------------------------------------------------------------------------------

// step 1: create an if statement using two parameters to test if both numbers are >= to 5
// step 2: if the statement is truthy, return "true"
// step 3: if the statement is falsy, return "false" in an else statement


if(5, 6 >= 5){
    console.log(true)
}
else{
    console.log(false)
}

if(10, 11 >= 5){
    console.log(true)
}
else{
    console.log(false)
}

if(0, 0 >= 5){
    console.log(true)
}
else{
    console.log(false)
}

if(1000, -1000 >= 5){
    console.log(true)
}
else{
    console.log(false)
}

if(6, 4 >= 5){
    console.log(true)
}
else{
    console.log(false)
}

if(5, 5 >= 5){
    console.log(true)
}
else{
    console.log(false)
}
//Pair and Compare-------------------------------------------------------------------------------

// step 1: use the if/else statement to determine if the two values are true or false
// step 2: use the strict equality (===) operator to compare each value and its data type
// step 3: use the logical AND (&&) operator to evaluate both pairs together

if("cat" === "cat" && 6 === 6){
    console.log(true)
}
else{
    console.log(false)
}

if("five" === 5 && "dog" === "dawg"){
    console.log(true)
}
else{
    console.log(false)
}

if(0 === false && "horse" === "horse"){
    console.log(false)
}
else{
    console.log(true)
}

if("eight" === "eight" && "ate" === "ate"){
    console.log(true)
}
else{
    console.log(false)
}

if(11 === "eleven" && "four" === "for"){
    console.log(true)
}
else{
    console.log(false)
}

if("cake" === "cake" && "pie" === "pie"){
    console.log(true)
}
else{
    console.log(false)
}