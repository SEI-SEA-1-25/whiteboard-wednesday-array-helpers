// You will extend the functionality of JavaScript's Array class
// with the following two methods:

//      Array.sum - sums all the numbers in an array
//      Array.average - averages all the numbers in an array

Array.prototype.sum = function () {
  //def & set beginning total
  let total = 0;
  //loop thru i of this array
  for (const i of this) {
    //every loop adds the value
    //of i to the total
    total += i;
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

// const arr = [-12, 7, 10, 5, 9];
// console.log("🍎", arr.sum());
// console.log("🍌", arr.average());
