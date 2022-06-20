// Write a function called averagePair
// Given a sorted array of integers and a target average
// Return true if there exists a pair of values in the array
// Where the average of the two values equal the target average
// Note that there could be one pair who's average equals the target average
// Ideal time complexity: Linear O(n)
// Ideal space complexity: Constant O(1)



// All test cases return true
console.log(averagePair([], 4) === false);
console.log(averagePair([1], 2) === false);
console.log(averagePair([0, 0], 0) === true);
console.log(averagePair([1, 1], 1) === true);
console.log(averagePair([1, 2], 1.5) === true);
console.log(averagePair([1, 2, 3], 2.5) === true);
console.log(averagePair([1, 2, 3], 3) === false);
console.log(averagePair([-1, 0, 1], -0.5) === true);
console.log(averagePair([1, 2, 3], 2.5) === true);
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1) === false);
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) === true);

