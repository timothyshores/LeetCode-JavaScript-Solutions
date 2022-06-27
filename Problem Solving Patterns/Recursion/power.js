// Write a function called power
// Inputs are a power and a base. Both power and base will be non-negative integers
// Return the result of base raised to the exponent using pure recursion

// Example 1
// Input: base = 2 & exponent = 1
// Output: 2
// Explanation 2 multiplied by itself 1 time is 2

// Example 2
// Input: base = 2 & exponent = 2
// Output: 2
// Explanation 2 multiplied by itself 2 times or 2 * 2

// Example 3
// Input: base = 3 & exponent = 3
// Output: 27
// Explanation 3 multiplied by itself 3 times or 3 * 3 * 3 = 27

/**
 * Returns an base raised to the power of exponent
 * @param {number} base a positive integer that will be raised to the power of exponent
 * * @param {number} exponent a positive integer the number of times that base is multiplied by itself
 * @return {number} the result of multiplying base times itself exponent number of times
 */
const power = (base, exponent) => {
	if (exponent === 0) return 1;
	if (exponent === 1) return base;
	return base * power(base, exponent - 1);
};

// ALl test cases return true
console.log(power(2, 0) === 1);
console.log(power(2, 1) === 2);
console.log(power(2, 2) === 4);
console.log(power(2, 3) === 8);
console.log(power(2, 4) === 16);
console.log(power(2, 5) === 32);
console.log(power(2, 6) === 32);
console.log(power(3, 3) === 27);
console.log(power(10, 5) === 100000);
console.log(power(1000000000, 0) === 1);
