// Given an array of integers and a number write a function called maxSubarraySum
// Return the maximum of of a subarray with the length of the number passed into the function

const maxSubarraySum = (arr, n) => {
	// A subarray can NOT be larger then the original array
	if (arr.length < n) return null;

	// Initialize a variable called max and set equal to 0
	let max = 0;

	// Set max to the sum of the first n elements in arr
	for (let i = 0; i < n; i++) {
		max += arr[i];
	}

	// Set current sum equal to the sum of of the n elements in arr
	let current = max;

	// Loop through the entire array
	for (let i = 0; i < arr.length - n; i++) {
		// Subtract the value at index i and add the value at index n
		current = current - arr[i] + arr[i + n];
		// If the current sum is greater than the max sum then set the max to current
		if (current > max) max = current;
	}

    // Return the maximum sub of a subarray with length n
	return max;
};

// Test Cases should all return true
console.log(maxSubarraySum([1], 1) === 1);
console.log(maxSubarraySum([1, 2], 2) === 3);
console.log(maxSubarraySum([2, 3], 3) === null);
console.log(maxSubarraySum([1, 2, 3], 2) === 5);
console.log(maxSubarraySum([3, 2, 1], 2) === 5);
console.log(maxSubarraySum([-1, 0, 1], 2) === 1);
console.log(maxSubarraySum([0, 2, 3, 5], 3) === 10);
console.log(maxSubarraySum([1, 2, 3, 5, 0], 3) === 10);
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) === 5);
console.log(maxSubarraySum([100, 200, 300, 400], 2) === 700);
console.log(maxSubarraySum([-3000, -2000, -1000], 2) === -3000);
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) === 5);
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) === 39);
