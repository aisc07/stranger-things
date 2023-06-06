//CUSTOMER TABLE

const customer = {
    firstName:          "Jake",
    lastName:           "smith",
    email:              "jaekSmih!aol.com",
    phone:              undefined,
    zipCode:            "631",
    favoriteFlavors:    32,
    cupSize:            "medium",
    favoriteStore:      "Target",
    firstVisit:         false
};

//UPDATE
customer["email"] = "Jak3Smith1992@email.com";
// OR
// customer.email = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
// OR
// customer.phone = 3195551234;
customer["zipCode"] = "63132";
// OR
// customer.zipCode = "63132";
customer["favoriteFlavors"] = "coffee, strawberry, matcha";
// OR
// customer.favoriteFlavors = "coffee, strawberry, matcha";


// console.log(customer)


//DELETE
delete customer["zipCode"];
// OR
// delete customer.zipCode;


delete customer["favoriteStore"];
// OR
// delete customer.favoriteStore;


//ADD

customer.toppings = "chocolate sprinkles, wafer straws, gummy bears";
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

console.table(customer)

//Property Keys
for(keys in customer){
    console.log(keys)
}
