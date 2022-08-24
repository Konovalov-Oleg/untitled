const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
console.log(heading2)

// console.dir(heading.textContent)


// setTimeout(() => {
//     heading.textContent = 'Changed from JS!'
//     heading.style.color = 'blue'
//     heading.style.textAlign = 'center'
//     heading.style.backgroundColor = 'green'
//     heading.style.padding = '2rem'
// }, 1500)

setTimeout(() => {
    addStylesTo(heading)
}, 1500)

function addStylesTo(node) {
    node.textContent = 'Changed from JS!'
    node.style.color = 'blue'
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'green'
    node.style.padding = '2rem'
}
