const person = {
    name: 'Oleg',
    age: 26,
    isProg: true,
    langs: ['ru', 'en'],
    'complex key': 'Complex Value',
    ['key_' + (1 + 3)]: 'computed key',
    greet() {
        console.log('greet from person')
    }
}

// console.log(person.name)
// console.log(person['age'])
// console.log(person['complex key'])
// person.greet()
//
// person.age++
// person.langs.push('by')
// console.log(person)
// // person['key_4'] = undefined
// delete person['key_4']
// console.log(person)

// const name = person.name
// const age = person.age
// const langs = person.langs

console.log(name, age, langs)