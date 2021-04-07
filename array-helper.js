// class Array {
//     constructor()
// }

Array.prototype.sum = function() {
    let total = 0 
    this.forEach(item =>{
        total += item
        // console.log(item)
        // console.log(total)
    })
    return total
    // console.log(total)
}
let numbers = [5, 10, 3, 6];
let sumOfNumbers = numbers.sum()
console.log(sumOfNumbers)

Array.prototype.average = function() {
    let sum = this.sum()
    let count = 0
    this.forEach(item => {
        count += 1
    })
    return (sum/count)
}
let averageOfNumbers = numbers.average()
console.log(averageOfNumbers)