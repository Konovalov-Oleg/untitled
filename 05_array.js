const cars = ['Mazda', 'Ford', 'BMW', 'mers']
const fib = [1, 1, 2, 3, 5, 8, 13]
const people = [
    {name: 'Oleg', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Vika', budget: 1700}
]

// Function
function addItemToEnd() {

}

//Method
// cars.push('Rino')
// cars.unshift('Volga')
// console.log(cars)
//
// const firstItem = cars.shift()
// const lastCar = cars.pop()
// console.log(lastCar)
// console.log(firstItem)
// console.log(cars)

// console.log(cars.reverse())
// console.log(cars)

// const index = cars.indexOf('BMW')
// cars[index] = 'Porsche'
// console.log(cars)
// let foundPerson
// for (const person of people) {
//     if (person.budget === 3500) {
//         foundPerson = person
//     }
// }
//
// console.log(foundPerson)

// const index = people.findIndex(function (person) {
//     return person.budget === 3500
// })
// const person = people.find(function (person) {
//     return person.budget === 3500
// })

// const person = people.find(person => person.budget === 3500)
// console.log(person)

// console.log(cars.includes('Mazda'))

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })
//
// const pow2 = num => num ** 2
// // const sqrt = num => Math.sqrt(num)
// //
// // const pow = fib.map(pow2).map(Math.sqrt)
//
// const pow = fib.map(pow2)
// //
// // console.log(upperCaseCars)
// const filterNumbers = pow.filter(num => num > 20)
// console.log(pow)
// console.log(filterNumbers)

// Задача 1
// const text = 'hi, we are learning JS'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

const allBudget = people.filter(person => person.budget > 2000)
    .reduce((acc, person) => {
    acc += person.budget
    return acc
}, 0)

console.log(allBudget)

