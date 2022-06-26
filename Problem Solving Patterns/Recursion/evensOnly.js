// Write a function called evensOnly
// Input is an array of integers
// Return an array containing only even numbers 

// Example 1:
// Input: arr = [2]
// Output: [2]
// Explanation 2 is the only even number in arr

// Example 2:
// Input: arr = [1]
// Output: []
// Explanation 1 is odd and is NOT even

// Example 3:
// Input: arr = [1, 2, 3, 4, 5]
// Output: [2, 4]
// Explanation Only 2 & 4 are even while 1, 3 & 5 are all odd

// Test Cases
console.log(evensOnly([1])); //returns []
console.log(evensOnly([1, 2])); //returns [2]
console.log(evensOnly([1, 2, 3])); //returns [2]
console.log(evensOnly([1, 2, 3, 4])); //returns [2, 4]
console.log(evensOnly([1, 2, 3, 4, 5])); //returns [2, 4]
console.log(evensOnly([1, 2, 3, 4, 5, 7])); //returns [2, 4]
console.log(evensOnly([1, 2, 3, 4, 5, 7, 9])); //returns [2, 4]
console.log(evensOnly([1, 2, 3, 4, 5, 7, 9, 10, 12])); //returns [2, 4, 10, 12]
