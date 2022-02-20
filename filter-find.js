const numbers = [5, 13, 7, 41, 29, 79, 3, 2, 19]
const bigNumber = numbers.filter(number => number > 20)
console.log(bigNumber)
const smallnumber = numbers.filter(number => number < 30)
console.log(smallnumber)

const products = [
    { name: 'Water Bottle', price: 250, color: 'yellow' },
    { name: 'Mobile Phone', price: 20000, color: 'Black' },
    { name: 'Smart Watch', price: 3000, color: 'Black' },
    { name: 'Sticky Note', price: 30, color: 'Pink' },
    { name: 'Water Glass', price: 90, color: 'White' }
]
const expensiveProduct = products.filter(product => product.price > 1000)
// console.log(expensiveProduct)
const blackProduct = products.filter(product => product.color == 'Black')
// console.log(blackProduct)

const colorProduct = products.find(product => product.color == 'Black')
console.log(colorProduct)