const numbers = [2, 4, 6, 8, 10]

// Formula 1.0
const doubleIt = number => number * 2
const output2 = []
for (number of numbers) {
    const result = doubleIt(number)
    output2.push(result)
}
console.log('previous Output : ' + output2);

// Same work in easy way
// const output = numbers.map(doubleIt) // map loop for each element
// const output = numbers.map(number => number * 2)
const output = numbers.map(x => x * 2)
console.log(output);