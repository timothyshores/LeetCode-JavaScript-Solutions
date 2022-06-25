// Given an array of integers nums and an integer target
// Return the indices of the two numbers such that they add up to target
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
// Solution: O(n) time complexity with O(n) space complexity in the pairings object

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
	// Track the compliment number that sum to target and the index of the initial value
	let pairings = {};
	// Track the current number while looping through nums and first index of the current value's pair
	let number, firstIndex;

	// Loop through nums one time. Linear O(n) time complexity
	for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
		// Set number to the value of nums at currentIndex
		number = nums[currentIndex];
		// Set first index to the value of pairings at the key nums[currentIndex]
		firstIndex = pairings[number];

		// If a number has a previous number in the nums array that adds up to target
		if (number in pairings) {
			// Return firstIndex of the number that adds up to target and currentIndex
			return [firstIndex, currentIndex];
		} else {
			// Set the key as the missing number that adds up to target and value as currentIndex
			pairings[target - number] = currentIndex;
		}
	}
};
