// Write  a recursive function called uppercaseStrings
// Input is an array of strings
// Return the input array of strings with all letters are in uppercase

/**
 * Returns an array where all characters are in uppercase
 * @param {String[]} arr an array of strings
 * @return {String[]} an array of strings where all letters are uppercase
 */

const uppercaseStrings = (arr) => {
	// Create symantic variable names for readability
	const firstWord = arr[0];
	const [, ...restOfArray] = arr;
	// Base case when arr is a single string in arr
	if (arr.length === 1) return [firstWord.toUpperCase()];
	// Uppercase first word  and spread the result of calling the function on the rest of the array
	return [firstWord.toUpperCase(), ...uppercaseStrings(restOfArray)];
};

// Test Cases
console.log(uppercaseStrings(["sam"]));
console.log(uppercaseStrings(["car", "taco", "banana"]));
console.log(uppercaseStrings(["bob", "sarah", "john"]));
