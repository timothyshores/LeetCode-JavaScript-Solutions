// Write a recursive function called flatten
// Input para is an array of arrays called arr
// Returns an array with all values flattened

const flatten = (arr) => {
	/** @type {(Array} */
	let flat = [];

	// Loop through arr
	for (let element of arr) {
		// If a given element is an array
		if (Array.isArray(element)) {
			// Spread in current values of flat and spread in the result of calling flatten on the subarray
			flat = [...flat, ...flatten(element)];
		} else {
			// Push the element to the end of the array
			flat = [...flat, element];
		}
	}

	return flat;
};

// Test Cases
console.log(flatten([1, 2, 3]));
console.log(flatten([1, [2, 3]]));
console.log(flatten([[1], [[2]], [3]]));
console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
