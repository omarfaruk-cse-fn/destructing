const fish = {
    id: 58, name: 'King Hilsa', price: 9000, phone: '01700000095',
    address: 'Chadpur', dress: 'silver'
}
// console.log(fish.phone)

//Formula 1.0
/* const phone = fish.phone
const id = fish.id
const name = fish.name
const price = fish.price */

// formula 2.0
/* const { id, name, price, phone, address, dress } = fish;
console.log(phone); */

const company = {
    name: 'gp', ceo: { id: 1, name: 'ajmol', food: 'fuska' },
    web: { work: 'Website Development', employee: '22', framwork: 'React' }
}

// formula 1.0
/* const work = company.web.work
const framwork = company.web.framwork */

// formula 2.0
const { work, employee, framwork } = company.web
const { food, name, id } = company.ceo
console.log(work, employee, framwork, food,)