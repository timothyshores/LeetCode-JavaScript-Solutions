// Write a function areThereDuplicates which accepts a variable number of arguments
// Return true if there are duplicate arguments passed into the functions
// Return false if there all arguments are unique
// See test cases for examples

const areThereDuplicates = (...args) => {
	// Create new args array and use JavaScripts .sort(). Linearithmic O(n log n) time complexity
	const arr = [...args].sort();

	// If there are 0 or 1 args then there are NO duplicates
	if (arr.length <= 1) return false;

	// Create two pointers lag at index 0 and lead at index 1. Constant O(1) space complexity
	let lag = 0;
	let lead = 1;

	// Loop through args array until lead pointer looks at the last element in the array
	while (lead < arr.length) {
		// If adjacent elements are equal then a duplicate was found
		if (arr[lag] === arr[lead]) return true;
		// Else adjacent elements are unique move both pointers to the right by 1 index
		lag += 1;
		lead += 1;
	}

	// Loop finished without finding any duplicate elements
	return false;
};

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
