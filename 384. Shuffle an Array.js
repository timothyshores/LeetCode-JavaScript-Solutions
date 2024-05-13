/*

LeetCode Problem 384: Shuffle an Array

Description:
Given an integer array nums, design an algorithm to randomly shuffle the array.
All permutations of the array should be equally likely as a result of the shuffling.

Implementation of the Solution class:
- Solution(int[] nums): Initializes the object with the integer array nums.
- int[] reset(): Resets the array to its original configuration and returns it.
- int[] shuffle(): Returns a random shuffling of the array.

Example Usage:
const solution = new Solution([1, 2, 3]);
console.log(solution.shuffle()); // Example output: [3, 1, 2]
console.log(solution.reset());   // Output: [1, 2, 3]
console.log(solution.shuffle()); // Example output: [1, 3, 2]

Constraints:
- 1 <= nums.length <= 50
- -10^6 <= nums[i] <= 10^6
- All elements in nums are unique.
- At most 10,000 calls in total will be made to reset and shuffle.

*/
