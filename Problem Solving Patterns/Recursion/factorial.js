// Write a function called factorial
// Input is a positive integer called num
// Return the factorial of a number

// Example 1:
// Input: num = 2
// Output: 2
// Explanation 2 * 1 = 3

// Example 2:
// Input: num = 3
// Output: 6
// Explanation 3 * 2 * 1 = 6

// Example 3:
// Input: num = 5
// Output:
// Explanation 5 * 4 * 3 * 2 * 1 = 120

/**
 * Returns the factorial of num
 * @param {number} num a positive integer
 * @return {number} the factorial of num
 */
const factorial = (num) => {
	if (num < 0) return 0;
	if (num <= 1) return 1;
	return num * factorial(num - 1);
};

// ALl test cases return true
console.log(factorial(0) === 1);
console.log(factorial(1) === 1);
console.log(factorial(2) === 2);
console.log(factorial(3) === 6);
console.log(factorial(4) === 24);
console.log(factorial(5) === 120);
