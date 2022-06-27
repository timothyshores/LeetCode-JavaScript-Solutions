// Write  a recursive function called uppercaseArr
// Input is an array of strings
// Return the input array of strings with the first character capitalized in each string

/**
 * Returns an array where the first letter of each string is capitalized
 * @param {String[]} arr an array of strings
 * @return {String[]} an array of strings where thee first letter of each string is capitalized
 */

const uppercaseArr = (arr) => {
	const firstWord = arr[0];
	const [, ...restOfArray] = arr;
	// add whatever parameters you deem necessary - good luck!
	if (arr.length === 1) return [uppercaseStr(firstWord)];
	return [uppercaseStr(firstWord), ...uppercaseArr(restOfArray)];
};

/**
 * Helper function that capitalizes the first character in each string
 * @param {string} str
 * @return {string} returns str with the first character in uppercase
 */
const uppercaseStr = (str) => str[0].toUpperCase() + str.slice(1);

// Test Cases
console.log(uppercaseArr(["sam"]));
console.log(uppercaseArr(["car", "taco", "banana"]));
console.log(uppercaseArr(["bob", "sarah", "john"]));
