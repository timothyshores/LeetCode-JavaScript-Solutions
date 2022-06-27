// Write a function called linear search
// Inputs are an array and a value
// If value is an element in the array return the index where the value is found
// If value is NOT in the array return -1

const linearSearch = (arr, value) => {
	let index = 0;

	for (let element of arr) {
		if (element === value) return index;
		index++;
	}

	return -1;
};

// Test Cases all return true
console.log(linearSearch([1], 1) === 0);
console.log(linearSearch([1], 0) === -1);
console.log(linearSearch([1, 2], 1) === 0);
console.log(linearSearch([1, 2], 2) === 1);
console.log(linearSearch([1, 2], 3) === -1);
console.log(linearSearch(["a"], "a") === 0);
console.log(linearSearch(["a"], "b") === -1);
console.log(linearSearch([1, 2, 3], 1) === 0);
console.log(linearSearch([1, 2, 3], 2) === 1);
console.log(linearSearch([1, 2, 3], 3) === 2);
console.log(linearSearch([1, 2, 3], 4) === -1);
console.log(linearSearch(["a", "b"], "a") === 0);
console.log(linearSearch(["a", "b"], "b") === 1);
console.log(linearSearch(["a", "b"], "c") === -1);
