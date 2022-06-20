// Given an array of integers and a number write a function called maxSubarraySum
// Return the maximum of of a subarray with the length of the number passed into the function



// Test Cases should all return true
console.log(maxSubarraySum([1], 1) === 1);
console.log(maxSubarraySum([1, 2], 2) === 3);
console.log(maxSubarraySum([2, 3], 3) === null);
console.log(maxSubarraySum([1, 2, 3], 2) === 5);
console.log(maxSubarraySum([3, 2, 1], 2) === 5);
console.log(maxSubarraySum([-1, 0, 1], 2) === 1);
console.log(maxSubarraySum([0, 2, 3, 5], 3) === 10);
console.log(maxSubarraySum([1, 2, 3, 5, 0], 3) === 10);
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) === 5);
console.log(maxSubarraySum([100, 200, 300, 400], 2) === 700);
console.log(maxSubarraySum([-3000, -2000, -1000], 2) === -3000);
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) === 5);
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) === 39);
