const numbers = [1,2,3,4,5,6,7,8,9]

// console.log(numbers[0])
// console.log(numbers.length)

console.log(numbers)

numbers.push(10)
console.log(numbers)

const lastItem = numbers.pop()
console.log({lastItem})
console.log(numbers)

numbers.shift()
console.log(numbers)

numbers.unshift(1)
console.log(numbers)

// numbers.splice(2,3)
// console.log(numbers)

const sliced = numbers.slice(2,3)
console.log({sliced})
console.log(numbers)