//DATATYPES

//string 
//number
//boolean
//object
//function


//const is a constant => if you define something as a const, it cannot be changed in the future
//let is mutable (can be changed) and const is immutable (cannot be changed)
//var is variable => it is still used, but is not the best method
//when you use console.log to print, it must be near
const fname = "Amani";   
let lname = "Taylor"; 
console.log(lname);    
var mname = "Rachel";  
lname = "Jones";
console.log(lname);
// fname = "Alexa"
// console.log(fname) // => will not work and will recieve an error message




//string
const message = "Hi, my name is"
let firstName = "Amani";
let lastName = "Taylor";
console.log(firstName, lastName)
console.log(message, firstName, lastName )


let stringNumber1 = "3";
let stringNumber2 = "4";
let stringWord = "years old";
// plus sign (+) combines two strings together - concatenation
console.log(stringNumber1 + stringNumber2, stringWord)

//number
let wallet = 20.00;
let price = 8.50;
let change = (wallet - price);

console.log(change)
console.log ("Your change is $" + change)

//boolean
// && => and
// || => or
// ! => not
// > < === ==
//anything you compare to a string, will become a string
console.log("2"===2) // false
console.log("2"==2)  //true

let money = 120;
let cost = 100;

if(money >= cost){
    console.log(true)
}
else{ console.log(false)
}




    //modulus [remainder in division]
    console.log(10%3)
    console.log(20%6)  
    console.log()



