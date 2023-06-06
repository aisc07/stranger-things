// function func(){

// }

function complicated(){

}
const func = ()=>{
    complicated()
    console.log("I am done!")
}
setTimeout(func, 5000)

setTimeout(()=>{
    console.log("Hello, Amani")
}, 4000)
//does the same thing

//setTimeout(function, time)
//seconds - 1000 = 1 second; 5000 = 5 seconds


// function countdown(number) {
// //     // Write your code here
// //     setTimeout(()=>{
// //        for(i=0; i<=5; i--), 1000)
// //   }

//   for(i=0; i<=5; i--)

//resolve - if all goes well, it will be successful
//reject - something goes wrong, 
new Promise((resolve, reject)=>{
    const random = 0;
    if(random===0){
        resolve("successful")
    }
    else{
        reject("failed")
    }
})

console.log(promise)

const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("done!")
    }, 5000)
})
promise.then(res=>{
    console.log(res)
})
