//Function

function rectangleArea (length, height){
    console.log(length * height)
    return height * length
}
//Invoke the function
const total = (rectangleArea(10,10) + rectangleArea(10,5)) *2
console.log(total)



//<-- Arrow --> / Function Expression

const rectangleArea = (length, height) => {
    console.log(length * height)
    return height * length
}