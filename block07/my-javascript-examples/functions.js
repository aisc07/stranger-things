//Greeting Function
function greeting(name){
    return `Hello,${name}!`
}

function cookSomethingFried(foods){
   const friedFoods=`fried ${foods}`
    return `Here is your ${friedFoods}`
}


console.log(greeting("Amani"))
console.log(cookSomethingFried("banana"))

//Math Function Example
function sub(a,b){
    return a-b
}

function subtraction(nbr1, nbr2){
    return nbr1 - nbr2;
}

//My Example #1
function playMusic(Artist){
    //set a new variable that takes in the paramater
    const alexaArtist = `play ${Artist}`
    
    return `Alexa, ${alexaArtist}`
}

console.log(playMusic("Linkin Park"))

//My Example #2
function buyGroceries(Food){
return `Go to Costco and buy ${Food}`
}

console.log(buyGroceries("milk, eggs, and cheese"));
