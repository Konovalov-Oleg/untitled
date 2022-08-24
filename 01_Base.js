// 1 Переменные

// const firstName = 'Vladilen';
// // const age = 26;
// const isProgrammer = true;
//
// const _ = 'private'
// const  $ = 'code'



// 2 Мутирование
// console.log('Имя человека: ' + firstName + ', возраст человека: ' + age)

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// 3 операторы
// let  currentYear = 2020
// const birthYear = 1993
//
// // const age = currentYear - birthYear
// //
// // console.log(age)
//
// const a = 10
// const b = 5
//
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(currentYear++)

// 4 Типы данных
// const isProgrammer = true
// const name = 'Oleg'
// const age = 26
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// 5 Приоритет операторов
// const fullAge = 26
// const birthYear = 1993
// const currentYear = 2020
//
// const isFullAge = currentYear - birthYear >= fullAge
//
// console.log(isFullAge)

// 6 Условные операторы
// const courseStatus = 'dg'
//
// if (courseStatus === 'ready') {
//     console.log('Ready!')
// } else if (courseStatus === 'pending') {
//     console.log('Pending!')
// } else {
//     console.log('Fail!')
// }

// const isReady = true
// // if (isReady) {
// //     console.log('Ok!')
// // } else {
// //     console.log('not Ok!')
// // }
//
// isReady ? console.log('Ok!') : console.log('not Ok!')
//
// const num1 = 42
// const num2 = '42'
// console.log(num1 === num2)

// 7 Булевая логика

// 8 Фунции

// function calculateAge(year) {
//     return 2022 - year
// }
//
// const myAge = calculateAge(1993)
// console.log(myAge)
//
// function logInfoAbout(name, year) {
//     const age = calculateAge(year)
//     console.log(name, age)
// }
//
// logInfoAbout('Oleg', 1997)

// 9 Массивы
// const cars =['mazda', 'mers', 'Ford']
// // const cars = new Array('mazda', 'mers', 'Ford')
// console.log(cars)
// console.log(cars.length)
// console.log(cars[1])
//
// cars[0] = 'Porsche'
// console.log(cars)
// cars[cars.length] = 'Mazda'
// console.log(cars)

// 10 Циклы
// const cars =['mazda', 'mers', 'Ford']

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i])
// }

// for (let car of cars) {
//     console.log(car)
// }

// 11 Объекты
// const person = {
//     firstName: 'Oleg',
//     lastName: 'Konovalov',
//     year: 1997,
//     languages: ['Ru', 'En'],
//     hasWife: false,
//     greet: function () {
//         console.log('greet')
//     }
// }
//
// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'languages'
// console.log(person[key])
// person.isProgrammer = true
// person.greet()
// console.log(person)