// Exercise 1
const me ={
    firstname: "John ",
    lastname: "Doe",
    age: 1000,
    email: "johndoe@gmail.com",
    placeOfResidence: "Ohio" 
}
//console.log(me)

// Exercise 2
const fancyGreetings = "Greetings,"

//console.log(fancyGreetings + me.firstname, me.lastname)

const monster = {
    name: "Slimer",
    color: "greenish",
    type: "plasm or ghost or something"
}
//console.log(monster)
//console.log(monster.name)

monster.type = {
    type: "creature"
}
//console.log(monster)

monster.age = {
    age: 6
}
//console.log(monster)
// Exercise 3


// Exercise 4
const cat1 = {
    name: "cat",
    breed:"bengal cat",
    age: 99
}
console.log(cat1)

const cat2 = {
    name: "cat2",
    breed: "bengal cat",
    age:100
}
console.log(cat2)

combineCats({name:"cat", age:"99", breed:"bengal cat"} , {name:"cat2", age:100, breed: "bengal cat"})
console.log(combineCats(cat1, cat2));