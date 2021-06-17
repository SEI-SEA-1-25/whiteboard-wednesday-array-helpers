// You will extend the functionality of JavaScript's Array class
// with the following two methods:

//      Array.sum - sums all the numbers in an array
//      Array.average - averages all the numbers in an array

Array.prototype.sum = function () {
  //def & set beginning total
  let total = 0;
  //loop thru i of this array
  //happens on the instance of the array ("this" array when created)
  for (const i of this) {
    //every loop adds the value
    //of i to the total
    total += i;
    //
    //alt loop:
    //for(let i = 0; i < this.length; i++){
    // total += this[i]
    // }
  }
  return total;
};

Array.prototype.average = function () {
  let total = 0;
  for (const i of this) {
    //every loop adds the value
    //of i to the total
    total += i;
  }
  //divide total by the length of array
  //to get average
  return total / this.length;
};

const arr1 = [-12, 7, 10, 5, 9];
const arr2 = [88, 27, 91, 0];
// console.log("🍎", arr1.sum());
// console.log("🍌", arr1.average());
// console.log("🍎", arr2.sum());
// console.log("🍌", arr2.average());
