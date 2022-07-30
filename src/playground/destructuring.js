// Object Destructuring

// const person = {
//     name:"Chaz",
//     age:28,
//     location:{
//         city:"Bay Shore",
//         temp:80
//     }
// };

// const {name,age} = person

// const {city,temp} = person.location

// console.log(`${name} is ${age} years old!`)

const book = {
    title:"Ego is the enemy",
    author:"Ryan Holiday",
    publisher:{
        name: 'Penguin'
    }
}
//  You can define the name to a default if the value doesnt exist in the object
//  
//
//
const {name:publisherName = 'Anon'} = book.publisher

//console.log(publisherName)

//Array Destructuring

const address = ['1299 S Juniper Street','Philadelphia','Pennsylvania', '1947']
const [, city, state,] = address

console.log(`You are in ${city} ${state}`)

const item = ['Coffee (hot)', '2.00','2.50','2.75']

const [drink,s,m,l] = item


console.log(`A medium ${drink} costs ${m}`)
