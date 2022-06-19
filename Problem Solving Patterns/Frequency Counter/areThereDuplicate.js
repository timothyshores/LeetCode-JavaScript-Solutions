// Write a function areThereDuplicates which accepts a variable number of arguments
// Return true if there are duplicate arguments passed into the functions
// Return false if there all arguments are unique
// See test cases for examples

console.log(areThereDuplicates(1)); // returns false
console.log(areThereDuplicates(1, 1)); // returns true
console.log(areThereDuplicates(1, 2)); // returns false
console.log(areThereDuplicates(1, 1, 2)); // returns true
console.log(areThereDuplicates(1, 2, 2)); // returns true
console.log(areThereDuplicates(1, 2, 3)); // returns false
console.log(areThereDuplicates(1, 2, 2, 3)); // returns true
console.log(areThereDuplicates(1, 2, 3, 4)); // returns false
console.log(areThereDuplicates("a")); // returns false
console.log(areThereDuplicates("a", "a")); // returns true
console.log(areThereDuplicates("a", "b")); // returns false
console.log(areThereDuplicates("a", "b", "c")); // returns false
console.log(areThereDuplicates("a", "b", "c", "c")); // returns true
console.log(areThereDuplicates("a", "b", "c", "a")); // returns true
