// # Assign Array.prototype.sum to be a function
// # (see above example with Person for the syntax).
// # Don't take in any arguments. Instead, you'll use this,
// # which, in any method, is the object it's called on.
// # So in the example above, in the call to nums.average(),
// # this is the array [5, 10, 3, 6].
// # Iterate through this, summing up all the numbers, and return that sum.

const nums = [5, 10, 3, 6];

Array.prototype.sum = function () {
  numSum = 0
  this.forEach(element => {
    numSum += element
  });
  return numSum
}

console.log(nums.sum());

// # Now do the same for Array.prototype.average,
// # BUT, this time, use your sum method you just declared,
// # which you can access using this.sum().
// # Remember that it returns a value that you can use!
// # If you want to test it, run the nums example above
// # and see if you get the same result!

Array.prototype.average = function () {
  return this.sum() / this.length
}

console.log(nums.average());