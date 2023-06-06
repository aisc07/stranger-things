setTimeout(()=>{
    console.log("water is boiling!")
}, 3000)

setTimeout(()=>{
    console.log("The steak is ready!")
}, 4000)

//setTimeout inside of a setTimeout
//setTimeout will finish the outside first
setTimeout(()=>{
    console.log("outside")
    setTimeout(()=>{
        console.log("inside")
    }, 5000)
},3000)