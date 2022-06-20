// Write a function called averagePair
// Given a sorted array of integers and a target average
// Return true if there exists a pair of values in the array
// Where the average of the two values equal the target average
// Note that there could be one pair who's average equals the target average
// Ideal time complexity: Linear O(n)
// Ideal space complexity: Constant O(1)

const averagePair = (arr, targetAverage) => {
	// If arr is an empty array or an array with 1 element a pair can not be found
	if (arr.length <= 1) return false;

	// Create lower pointer at first element and upper point at last element in arr. Constant O(1) space complexity
	let lower = 0;
	let upper = arr.length - 1;

	// Continue iterating while lower point is less than upper pointer. Linear O(n) time complexity.
	while (lower < upper) {
		// Calculate the average of the current pair of values
		let currentAverage = (arr[lower] + arr[upper]) / 2;
		// Return true if the average of lower and upper values is equal to targetAverage
		if (currentAverage === targetAverage) return true;
		// Move upper pointer 1 index to the left if current average is greater than targetAverage
		if (currentAverage > targetAverage) upper--;
		// Move lower pointer 1 index to the right if current average is less than targetAverage
		if (currentAverage < targetAverage) lower++;
	}

	// There is NO pair of values in the array with an average is equal to targetAverage
	return false;
};

// All test cases return true
console.log(averagePair([], 4) === false);
console.log(averagePair([1], 2) === false);
console.log(averagePair([0, 0], 0) === true);
console.log(averagePair([1, 1], 1) === true);
console.log(averagePair([1, 2], 1.5) === true);
console.log(averagePair([1, 2, 3], 2.5) === true);
console.log(averagePair([1, 2, 3], 3) === false);
console.log(averagePair([-1, 0, 1], -0.5) === true);
console.log(averagePair([1, 2, 3], 2.5) === true);
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1) === false);
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) === true);
