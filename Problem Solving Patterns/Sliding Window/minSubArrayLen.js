// Write a function called minSubArrayLen that accepts two parameters
// First parameter is an array of positive integers and second parameter is a positive integer
// Return the minimum length of a contiguous subarray where the sum is >= second parameter integer
// Return 0 if a contiguous subarray with sum >= second parameter integer does NOT exist

const minSubArrayLen = (arr, n) => {
	let currentSum = 0;
	let left = 0;
	let right = 0;
	let minLength = Infinity;

	while (left < arr.length) {
		if (currentSum < n && right < arr.length) {
			currentSum += arr[right];
			right++;
		} else if (currentSum >= n) {
			minLength = Math.min(minLength, right - left);
			currentSum -= arr[left];
			left++;
		} else {
			break;
		}
	}

	return minLength !== Infinity ? minLength : 0;
};

// Test Cases should all return true
console.log(minSubArrayLen([1], 2) === 0);
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9) === 2);
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7) === 2);
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) === 2);
console.log(minSubArrayLen([3, 4, 16, 22, 5, 7, 8, 9, 10], 39) === 3);
console.log(minSubArrayLen([3, 4, 16, 22, 5, 7, 8, 9, 10], 55) === 5);
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) === 0);
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) === 1);
