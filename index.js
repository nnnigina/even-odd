let numbers = [12, 34, 57, 75, 13, 5, 89, 56, 12, 4, 95, 100]

let even = []

let odd = []

numbers.filter(item => {
    if (item % 2 === 0) {
        even.push(item)
    } else {
        odd.push(item)
    }
})


console.log(even);

console.log(odd);

console.log(numbers);