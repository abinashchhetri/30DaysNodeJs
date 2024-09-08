// Create a separate countries.js file and store the countries
//  array into this file, create a separate file web_techs.js
// and store the webTechs array into this file.
//  Access both file in main.js file

const countries = require('./countries')
const webTechs = require('./web_techs')

// First remove all the punctuations and change the string to array
// and count the number of words in the array

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let textWithoutPunctuation = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
const word = textWithoutPunctuation.split(' ');
console.log(word);
console.log(word.length)



// In the following shopping cart add, remove, edit items

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift("Meat")
shoppingCart.push("Sugar")
const indexOfItem =  shoppingCart.indexOf("Honey")
const indexOfItemm =  shoppingCart.indexOf("Tea")

shoppingCart.splice(indexOfItem, 1)

shoppingCart[indexOfItemm] = "Green Tea"
console.log(shoppingCart)


// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const itemExist = countries.includes("Ethiopia")

if(itemExist){
    console.log("Ethiopia".toUpperCase())
}else{
    countries.push("Ethiopia")
}

// Concatenate the following two variables and store it in a fullStack variable.

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']

// console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)


// Exercise: Level 3
// The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  
// - Sort the array and find the min and max age 
// - Find the median age(one middle item or two middle items divided by two) 
// - Find the average age(all items divided by number of items) - 
// Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method

// 1.Slice the first ten countries from the countries array

// Find the middle country(ies) in the countries array

// Divide the countries array into two equal arrays if it is even. 
// If countries array is not even , one more country for the first half.

// question 1 answer
 const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 

 ages.sort()
 const minAge = ages[0]
 const maxAge = ages[ages.length-1]

 console.log(`minage: ${minAge}\nmax age : ${maxAge}`)

const  meadianItem = ages.length / 2

if(Number.isInteger(meadianItem)){
    console.log(`The meadin Age is : ${ages[meadianItem]}`)
}else{
    console.log(ages)
    const medain = (ages[Math.trunc(meadianItem)] +ages[Math.trunc(meadianItem) + 1] )/2;
    console.log(`The medain Age is: ${medain}`)
}


const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
  }
  
  for (const key in user) {
    console.log(key, user[key])
  }

  const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki',
    },
    getPersonInfo: function () {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    },
  }
  
  //Object methods: Object.assign, Object.keys, Object.values, Object.entries
  //hasOwnProperty
  
  const copyPerson = Object.assign({}, person)
  console.log(copyPerson)

  const keys = Object.keys(copyPerson)
console.log(keys) //['name', 'age', 'country', 'skills', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']

const values = Object.values(copyPerson)
console.log(values)

const entries = Object.entries(copyPerson)
console.log(entries)



const dog = {}
dog.name = "niki"
dog.legs = 4
dog.color = ""
dog.bark = function(){
    return "woof woof"
}

const dogValue = Object.values(dog) 
console.log(dogValue)



const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  let useer = "";
  let skillsCount = 0;

  for( let i in users){
    if(users[i].skills.length > skillsCount){
        skillsCount = users[i].skills.length
        useer = i

    }
  }
  console.log(`User name : ${useer}\n No of Skills : ${skillsCount}`)