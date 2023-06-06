console.log("-------------------------------Only Odds--------------------------------------");

// step 1: define an array with the list of numbers given
// step 2: define an empty array that will put the new array of odd numbers
// step 3: modify the array of numbers given using the for-of-loop method
// step 4: use the if-statement that defines a condition that will return only the odd numbers
            //if the number (num) modulo 2 (%2) has a remainder of 1 (===1)
// step 5: use the "push" method to add the numbers that meet this condition to the new (empty) array
// step 6: print the new array in a console.log() to return only the odd numbers in the original array

const numbers1 = [2,4,6,8,11,20,15,22];

    const odds = [];
    for(num of numbers1){
        if(num%2===1)
        odds.push(num)
    };

    console.log(odds);
console.log("------------------");

const numbers2 = [1,2,3,4,5,6,7,8,9,10]; 
   
const odds2 =[];
    for(num2 of numbers2){
        if(num2%2===1)
        odds2.push(num2)
    };

    console.log(odds2);
console.log("------------------");

const numbers3 = [70,42,55,81,21,91,34];
    
const odds3 = [];
    for(num3 of numbers3){
        if(num3%2===1)
        odds3.push(num3)
    };

    console.log(odds3);
console.log("------------------");

const numbers4 = [2,4,6,8,10,11,12];

const odds4 = [];
for(num4 of numbers4){
    if(num4%2===1)
        odds4.push(num4)
    };

    console.log(odds4);
   
console.log("-------------------------------Vowel vs Consonant------------------------------")

const vowels = ["a", "e", "i", "o", "u"]
const constonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

console.log(vowels[])

function word (vowels, constonants){
 return vowels, constonants
 }


 console.log("hello has"+ constonants + "constonants and" + vowels + "vowels")


console.log("---------------------------------Reverse Array---------------------------------")
//step 2: use a for-loop to reverse the array
//step 3: let"i" start as the highest index in the array
//step 4: have the condition compare your highest index (arrayName.length-1) to the lowest index of 0
//step 5: use i-- to decrease each loop by 1
//step 6: run your new array output in a console.log(arrayName[i])

const arr0 = [1,2,3];

for(let i = 2; i >= 0; i--){
    console.log(arr0[i])
}
console.log("--------OR--------");
          
for(let i = arr0.length -1; i >= 0; i--){
    console.log(arr0[i])
};

console.log("------------------");

const arr1 = [1,3,5,7,9,11];

for(let i = 5; i >= 0; i--){
    console.log(arr1[i])
};

console.log("--------OR--------");
          
for(let i = arr1.length -1; i >= 0; i--){
    console.log(arr1[i])
};

console.log("------------------");

const arr2 = [20,50,30,60,200];

 for(let i = 4; i >= 0; i--){
    console.log(arr2[i])
 };

console.log("--------OR--------");

 for(let i = arr2.length -1; i >= 0; i--){
  console.log(arr2[i])
 };

console.log("------------------");

const arr3 = [1,-1,2,-3,5,-8,13];

for(let i = 6; i >= 0; i--){
    console.log(arr3[i])
};
         
console.log("--------OR--------");

for(let i = arr3.length -1; i >= 0; i--){
  console.log(arr3[i])
};

console.log("----------------------------------Fizz Buzz----------------------------------")
//step 1: define a variable  called (num) starting at 1 using the let statement
//step 2: use a while-loop, meet the condition to print 1 to 100 on a new line (1<=100) and increases by 1 until the condition is met (num++)
//step 3: within the while-loop, use an if-statement to meet a specific condition for each number
            //if the variable(num) modulo 3 (%3) equals(===) 0, "meaning it is divisible by 3 with no remainder", print the word, "Fizz" instead of the number
            //if the variable(num) modulo 5 (%5) equals(===) 0, "meaning it is divisible by 5 with no remainder", print the word, "Buzz" instead of the number
            //if the variable(num) modulo 3 (%3) and (&&) 5 (%5) equals (===) 0, "meaning (num) is divisible by both 3 and 5 wtih no remainder", print the word, "FizzBuzz" instead of the number
            //keep all the if-statements into one code-block, so that that conditions are all met before printing the remaining numbers
//step 4: use the else-statement to print the remaining numbers (console.log(num)) to meet all of these conditions


let num = 1;

while(num <= 100){

console.log('********')

       if(num%3===0){
            console.log(" Fizz")
       
        if(num%5===0){
            console.log(" Buzz")
       
        if(num%3===0 && num%5===0){
            console.log(" FizzBuzz")
        }}}

        else{console.log(num)
        };

    num++};
