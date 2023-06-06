//My Object Examples - Block 15

const balletShoe = {
    brand:"Under Armour",
    laces: true,
    velcro: false,
    color: "Pink",
    price: 129.99,
    activituTyp: "Ballet",
    //"endorsement" is  a nested object
    endorsement: {  athlete: "Misty Copeland",
                    gender: "female",
                    age: 40,
                    ethnicity:"African American",},
    showFact2(){
        console.log(`${this.endorsement.athlete} is a famous ${this.endorsement.ethnicity} ballerina.`)
        console.log(`Professional athlete, ${this.endorsement.athlete} uses ${this.brand} ${this.activituTyp} shoes when she performs on stage.`)
        console.log(`${this.color} is her favorite color.`)
        console.log(`The price of this ${this.brand} ${this.activituTyp} shoe is $${this.price}.`)
    }
}
//to call a function in an object, use console.log(name-of-object.name-of-function)
console.log(balletShoe)
console.log(balletShoe.showFact2())


// The "type" property key is a nested object
// "shoeFact3" is a function
// to call the function, shoeFact3()
//{} signature
//"this" keyword is referring to the object
//ex: this."property key" => this.brand => is Nike
const basketballShoe = {
    brand: "Nike",
    type:   {   name:   "Air Jordan Retro",
                color:  "black and yellow",
            },
    laces: true,
    velcro: false,
    durability: true,
    price: 129.99,
    activituTyp: "Basketball",
    showFact3(){
        console.log(`The ${this.brand} ${this.type.name} is used by many ${this.activituTyp} players in the NBA.`)
        console.log("It is comfortable.")
        console.log(`${this.type.name} was designed by Michael Jordan himself.`)

    }
}
console.log(basketballShoe)
console.log(basketballShoe.showFact3())
console.log(basketballShoe.type.color)


// objectMethod(){}
const vendingMachine = {
    product: "soda",
    brand:{
        name:"Fanta",
        taste: "sweet",
        sugar: 73,
        diet: false,
        },
    flavors: "grape, cherry, orange, and strawberry",
    price: 1.25,
    themeSong(){
        console.log(`Wanna ${this.brand.name}, don't you wanna!`)
    }

}
console.log(vendingMachine)
console.log(vendingMachine.flavors)
console.log(vendingMachine.themeSong())