//DISCOUNT CHAIN

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

//COUPON DISCOUNT - $10 off after subscription discount

//create a function for the coupon discount
//define each parameter (key-property) that will return the grand total
//use the if-statement to check for specific conditions (coupon === true) to qualify for the $10 discount
//write a formula that returns the grand total and applies the coupon discount (-10) 
//invoke the function with each parameters key-value
//print the result of your function in a sentence

function couponDiscount(pricePerRefill, refills)
{
    if(timmy.coupon === true && timmy.subscription === false)
    
            {
                return (pricePerRefill * refills) -10
            }
}

const timmyTotal = couponDiscount(25,3)
console.log(`Your grand total is $${timmyTotal}`)

//SUBSCRIPTION DISCOUNT - 25% discount after refill total

//create a function for the subscription discount
//define each parameter (key-property) that will return the grand total
//use the if-statement to check for specific conditions (subscription === true) to qualify for the 25% discount
//write a formula that returns the grand total and applies the subscription discount (grand total * 0.25) 
//invoke the function with each parameters key-value
//print the result of your function in a sentence


function subDiscount(pricePerRefill, refills)
{
    if(sarah.coupon === false && sarah.subscription === true)
            {
                return (pricePerRefill * refills) - ((pricePerRefill * refills) * 0.25) 
            }
}
const sarahTotal = subDiscount(50,1)
console.log(`Your grand total is $${sarahTotal}`)


//COUPON & SUBSCRIPTION DISCOUNT (BOTH)

//create a function for both the coupon and subscription discount
//define each parameter (key-property) that will return the grand total
//use the if-statement to check for both conditions (coupon === true) and (subscription === true) to qualify for the 25% discount and $10 discount
//write a formula that returns the grand total and applies the subscription discount first (grand total * 0.25) and then applies the coupon discount (-10)
//invoke the function with each parameters key-value
//print the result of your function in a sentence


function bothDiscount(pricePerRefill, refills)
{
    if(rocky.coupon === true & rocky.subscription === true)
            {
                return ((pricePerRefill * refills) - ((pricePerRefill * refills) * 0.25)) - 10 
            }   
}
const rockyTotal = bothDiscount(30,5)
console.log(`Your grand total is $${rockyTotal}`)