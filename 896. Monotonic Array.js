// 896. Monotonic Array\
// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

// Example 1:
// Input: nums = [1,2,2,3]
// Output: true

// Example 2:
// Input: nums = [6,5,4,4]
// Output: true

// Example 3:
// Input: nums = [1,3,2]
// Output: false

const isMonotonic = (array) => {
	if (array.length < 2) return true;

	let decreasing = false;
	let increasing = false;
	let index = 1;

	while (index < array.length) {
		if (array[0] < array[index]) {
			increasing = true;
			break;
		}
		if (array[0] > array[index]) {
			decreasing = true;
			break;
        }
        
		if (index === array.length - 1) return true;

		index++;
	}

	let previousElement, currentElement;

	for (let i = index + 1; i < array.length; i++) {
		previousElement = array[i - 1];
		currentElement = array[i];
		if (increasing && previousElement > currentElement) return false;
		if (decreasing && previousElement < currentElement) return false;
	}

	return true;
};
