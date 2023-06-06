const paraContainer = document.querySelector("#paragraph-container")
console.log({paraContainer})

const para = document.createElement("p")
// paraContainer.innerHTML = "This is Patrick!"

para.textContent = "This is Patrick!"
console.log({para})



// const paraContainer = document.querySelector("#paragraph-container")
// console.log({paraContainer})
// const para = document.createElement("p")
// para.textContent = "This is a test paragraph!"
// console.log({para})
// // paraContainer.innerHTML = "<p></p>"
// paraContainer.append(para)
// console.log({paraContainer})

const foodList = ["apple", "peach", "pear"]

const foodContainer = document.getElementById("food-container")


const ul = document.createElement ("ul")
console.log(foodContainer)

const url1= "https://static.wikia.nocookie.net/spongebob-dictionary/images/c/cb/SpongeBob.png/revision/latest?cb=20171124141154"
const url2 ="https://static.wikia.nocookie.net/nickelodeon/images/e/ea/Squidward_in_2018.png/revision/latest?cb=20220801073048"
const url3 ="https://static.wikia.nocookie.net/spongebob/images/7/7b/Krabs_artwork.png/revision/latest?cb=20220807045807"
const imageUrls = [url1, url2, url3]

for(let i=0; i<imageUrls.length; i++){
    const img = document.createElement("img")}
img.setAttribute("src", url)

console.log(img)




// for(let i=0;i<imageUrls.length;i++){
//     const img = document.createElement("img")
// }
// imageUrls.forEach(url =>{
//     const img = document.createElement("img")
// })
// imageUrls.forEach(url =>{
//     const img = document.createElement("img")
//     img.setAttribute("src",url)
//     console.log({img})
// })