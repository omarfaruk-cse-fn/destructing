const friends = ['Asif Akbar', 'Tuhidul Islam', 'Nahid Al Mamun', 'Abdullah Al Mamun']

const friendsNameLength = friends.map(friend => friend.length)
console.log(friendsNameLength)

const products = [
    { name: 'Water Bottle', price: 250, color: 'yellow' },
    { name: 'Mobile Phone', price: 20000, color: 'Black' },
    { name: 'Smart Watch', price: 3000, color: 'Black' },
    { name: 'Sticky Note', price: 30, color: 'Pink' },
    { name: 'Water Glass', price: 90, color: 'White' }
]
// const productName = products.map(product => product.name.length)
const productName = products.map(product => product.name)
// products.map(product => console.log(product))
products.forEach(p => console.log(p)) // if we don't have to return value then we can use forEach Loop
console.log(productName)
