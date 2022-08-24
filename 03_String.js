// const name = 'Oleg'
// const age = 26

// const output = 'Привет, меня зовут ' + name + ' и мой возраст: ' + age + ' лет'
// const output = `Привет, меня зовут ${name} и мой возраст ${age < 20 ? 'A' : 'B'} лет.`
// console.log(output)

// const output = `
// <div>This is div</div>
// <p>this is P</p>
// `

// console.log(output)

// const name = 'Oleg'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('eg'))
// console.log(name.startsWith('O'))
// console.log(name.endsWith('g'))
// console.log(name.repeat(3))
// const string = '     password    '
// console.log(string.trim())

function logPerson(s, name, age) {
    if (age < 0) {
        age = 'Ещё не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Oleg'
const personAge = 25
const personAge2 = -10

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName}, Возраст: ${personAge2}!`

console.log(output)
console.log(output2)