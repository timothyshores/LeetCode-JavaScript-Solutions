// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.

// Example 1:
//     Input: arr = [1,2,2,1,1,3]
//     Output: true
//     Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
//     Example 2:

// Example 2:
//     Input: arr = [1,2]
//     Output: false
//     Example 3:

// Example 3:
//     Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
//     Output: true

// Constraints:
//     1 <= arr.length <= 1000
//     -1000 <= arr[i] <= 1000

/**
 * @param {number[]} arr
 * @return {boolean}
 */

const uniqueOccurrences = (arr) => {
	// Store the counts of each number in an object
	const counts = {};

	// Loop through arr in linear O(n) time complexity
	for (num of arr) {
		// Increment the counts value for a given number if the key exists
		// Or initialize the counts value to 1 for a new unique number
		counts[num] = (counts[num] || 0) + 1;
	}

	// Create a set with only the unique number of occurances in counts values
	const uniqueFrequencyCounts = new Set(Object.values(counts));

	// Compare the number of values in the counts object with the size of uniqueFrequencyCounts
	return Object.values(counts).length === uniqueFrequencyCounts.size;
};
