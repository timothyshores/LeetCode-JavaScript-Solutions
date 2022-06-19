// Implement a function called countUniqueValues
// Input will be a sorted array of integers
// Input integers can be negative, zero and or positive
// Return the number of unique integers in the array
// Input array can be an empty array

const countUniqueValues = (arr) => {
	// If arr is empty return 0 or if arr.length is 1 return 1
	if (arr.length <= 1) return arr.length;

	// Initialize a count variable to keep track of unique values within arr
	// An array of two integers contains at least 1 unique value
	let count = 1;

	// Create two pointers lag pointer at index 0 and lead pointer at index 1
	let lag = 0;
	let lead = 1;

	// Loop through arr until lead index reaches the last element
	while (lead < arr.length) {
		// A unique value is found when the lag and lead values are NOT equal
		if (arr[lag] !== arr[lead]) {
			// Increment the count
			count += 1;
			// Set lag pointer to to current index of lead pointer
			lag = lead;
		}
		// Increment the lead pointer regardless of lag and lead values are equal or not
		lead += 1;
	}

	return count;
};

// Test Cases
console.log(countUniqueValues([])); // returns 0
console.log(countUniqueValues([1])); // returns 1
console.log(countUniqueValues([1, 1])); // returns 1
console.log(countUniqueValues([1, 2])); // returns 2
console.log(countUniqueValues([1, 1, 2])); // returns 2
console.log(countUniqueValues([1, 2, 3])); // returns 3
console.log(countUniqueValues([1, 1, 2, 2])); // returns 2
console.log(countUniqueValues([1, 1, 2, 2, 3, 3])); // returns 3
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); //returns 2
console.log(countUniqueValues([1, 2, 2, 3, 3, 3, 4])); // returns 4
console.log(countUniqueValues([-2, -1, 0, 0, 0, 1, 1, 2])); // returns 5
console.log(countUniqueValues([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])); // returns 1
