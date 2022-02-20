//declare variable based on the name of an object property
//Object Destructuring
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 }
const { x, y } = myObject
console.log(x, y)

//Array destructuring. Position wise value add hoy.
const [p, q] = [88, 99]
console.log(p, q)

const company = {
    name: 'gp',
    ceo: { id: 1, name: 'ajmol', food: 'fuska' },
    web: { work: 'Website Development', employee: '22', framwork: 'React' }
}
console.log(company?.ceo?.name);
console.log(company?.habijabi?.work);
