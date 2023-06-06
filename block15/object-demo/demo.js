//Class Examples

const shoe1 = {
    brand: "Nike",
    laces: true,
    velcro: false,
    color: "purple",
    price: 150,
    activituTyp: "running"

}

const shoe2 = {
    brand: "Adidas",
    laces: true,
    velcro: false,
    color: "black",
    price: 125,
    activituTyp: "hiking"

}

const shoe3 = {
    brand: "Converse",
    laces: true,
    velcro: false,
    color: "black and purple",
    price: 100.00,
    activituTyp: "walking",
    showFact(){
        console.log(`This ${this.color} ${this.brand} shoe is for ${this.activituTyp}.`)
        console.log(`It costs $${this.price}.`)
    }
}
console.log(shoe3.showFact())

//Made an array called "inventory" to record two different types of shoes
//console.log(inventory) will print both objects => both shoes
const inventory = [shoe1, shoe2]
console.log(inventory)

//This adds "pushes" shoe3 to "inventory" with shoe1 and shoe2
inventory.push(shoe3)
console.log(inventory)

//Two different methods used
//This will print the color of shoe3
console.log(shoe3.color)

//This will also print the price of shoe3
console.log(shoe3["price"])

//To print every "item" => property key
//must use bracket notation
for(item in shoe3){
    console.log([item])
}

//returns the keys or values within an object into an array
console.log(Object.keys(shoe3))

console.log(Object.values(shoe3))


// for(let i=0;i<Object.values(shoe3).length;i++){
//     console.log()
// }