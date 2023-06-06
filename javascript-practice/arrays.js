//ARRAYS 
//type of data structure that are used to store multiple values in a single variable
//they can hold multiple datatypes (eg: strings, numbers, etc.)
//Example:

//single variable for each fruit
const apple = "apple";
const oranges = "oranges";
//multiple data
const fruit = ["apples", "oranges", "peaches", "grapes", "pears", "watermelon"]

// arrays are 0-indexed
//the first item in an array starts at index 0
console.log(fruit[0]); // => apples
console.log(fruit[3]); // => grapes
console.log(fruit[5]); // => watermelon

//MODIFY AN ARRAY => ADD | DELETE | UPDATE
//these methods are called with a period (.) then the method name and open/closed parentheses
//METHODS
//.pop() => removes the last element from an array and returns that element
//.push() => adds the specified elements to the end of an array and returns the new length of the array
//.shift() => removes the first element from an array and returns that removed element
//.unshift() => adds the specified elements to the beginning of an array and returns the new length of the array
//.slice() => termporary changes EXAMPLE: arrayName.slice(startIndex, endIndex); will return a new array object
//.splice() => permanent changes - can take two or more parameters (startIndex, #itemstoDelete, #itemstoAdd)
//Rest Parameters (The "spread" or "rest operator")
//Example: arrayName.methodName("optionalParameters")

console.log(fruit.push("tangerine"));
console.log(fruit);

console.log(fruit.pop());
console.log(fruit)

console.log(fruit.shift());
console.log(fruit);

console.log(fruit.unshift("strawberry"));
console.log(fruit);

const schoolSupplies = ["paper", "pencil", "eraser", "binder", "pen", "book"]
console.log(schoolSupplies);
console.log(schoolSupplies.slice(1,4));
console.log(schoolSupplies.slice(2,-1));

const candy = ["lollypop", "gummy bear", "kitkat", "tootsie roll", "M&M"]
// candy.splice(0,0,"gummy worms");
// console.log(candy);

candy.splice(2,0,"payday");
console.log(candy);
//take everything out of an array  => SPREAD OPERATOR => use (...)
//allows us to quickly copy all or part of an existing array or object into another array or object
//Example:
const alphabet1 = ["a","b" ,"c", "d"]
const alphabet2 = ["e", "f", "g"]

console.log(...alphabet1);
console.log(alphabet1);
console.log(...alphabet2);
console.log(alphabet2);
console.log(...alphabet1,...alphabet2);
console.log(alphabet1, alphabet2); // two seperate arrays
console.log([...alphabet1,...alphabet2]);// use brackets to combine both arrays into a single array
console.log(...[...alphabet1,...alphabet2]);//the array is now a string

//REST OPERATOR
//will only take the rest of the array
//Example:
function pets (firstPet, secondPet, ...otherPets){
    console.log(firstPet, secondPet);
    console.log(otherPets);
}

pets("dog", "parrot", "cat", "hamster", "rabbit")


//How to call a function
//name of the function with parenthesis and argument inside
//function name(argument)