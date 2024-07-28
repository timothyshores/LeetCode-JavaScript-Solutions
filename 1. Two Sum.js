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
	// Store the nums as the keys and indices as the values
	const differenceMap = {};

	// Iterate through nums array
	for (let i = 0; i < nums.length; i++) {
		// Store current number and number that will sum to target
		const currentNum = nums[i];
		const missingAddend = target - currentNum;

		// When we've previously seen the other addend that will sum to target
		if (missingAddend in differenceMap) {
			// Return the current index and index of the other addend that will sum to target
			return [i, differenceMap[missingAddend]];
		} else {
			// Add the current num and index to the differenceMap object
			differenceMap[currentNum] = i;
		}
	}
};

// Shortened syntax solution
const twoSumShort = (nums, target) => {
    const numsMap = {};

    for (const i in nums) {
        if (nums[i] in numsMap) return [i, numsMap[nums[i]]]
        numsMap[target - nums[i]] = i;
    }
};