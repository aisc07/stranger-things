//Object Notes
//objects over array, able to find the object by using the key instead of the index
//Spread Operator

//combine two objects 

const person = {
        fname: "amani",
        lname: "taylor",
        female: true,
        age: 34,
        ethnicity: "african american",
        belongings: "purse",
        movies(){
            console.log(`${this.fname} uses her ${this.belongings} to go to the movies`) 
        }
}


// function person (obj1, obj2){
//     return {...obj1, ...obj2}
// }

// function person (fname, belongings){
//     return {...fname, ...belongings}
// }