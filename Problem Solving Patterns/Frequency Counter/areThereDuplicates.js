// Write a function areThereDuplicates which accepts a variable number of arguments
// Return true if there are duplicate arguments passed into the functions
// Return false if there all arguments are unique
// See test cases for examples

const areThereDuplicates = (...args) => {
	const unqiueArgs = new Set();

	// Iterate through the args. Linear O(n) time complexity
	for (const arg of args) {
		// If arg is in the set
		if (unqiueArgs.has(arg)) {
			// Then arg is a duplicate and return true
			return true;
		}
		// Else current arg is NOT in the set
		else {
			// Add arg to the unqiueArgs set. Linear O(n) space complexity.
			unqiueArgs.add(arg);
		}
	}

	// If loop finished without finding any duplicates then all arguments are unique
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
