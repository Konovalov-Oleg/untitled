const person = {
    name: 'Oleg',
    age: 62,
    isProg: true,
    langs: ['ru', 'en'],
    // 'complex key': 'Complex Value',
    // ['key_' + (1 + 3)]: 'computed key',
    greet() {
        console.log('greet from person')
    },
    info() {
        console.info('Info person: ', this.name)
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

// const {name, age: personAge = 10, langs} = person
//
// console.log(name, personAge, langs)

// console.log(person)

// for (let personKey in person) {
//     if (person.hasOwnProperty(personKey)) {
//         console.log('key:', personKey)
//         console.log('value:', person[personKey])
//     }
// }

// const keys = Object.keys(person)
// keys.forEach((key) => {
//     console.log('key:', key)
//     console.log('value:', person[key])
// })
//
// console.log(keys)

// Context
// person.info()

const logger = {
    keys() {
        console.log('obj keys: ', Object.keys(this))
    },

    // keysAndValues() {
    //     // Object.keys(this).forEach(key => {
    //     //     console.log(`"${key}": ${this[key]}`)
    //     // })
    //     Object.keys(this).forEach(function (key) {
    //         console.log(`"${key}": ${this[key]}`)
    //     })
    // },

    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('------ Start ----')
        }
        Object.keys(this).forEach(key => {
            console.log(`"${key}": ${this[key]}`)
            if (between) {
                console.log('------------')
            }
        })
        if (bottom) {
            console.log('------ End ----')
        }
    }
}

// const bound = logger.keys.bind(person)
// bound()

// logger.keysAndValues.call(person)

logger.withParams.call(person, true, true, true)