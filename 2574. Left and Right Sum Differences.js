/*

2574. Left and Right Sum Differences

Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

answer.length == nums.length.
answer[i] = |leftSum[i] - rightSum[i]|.
Where:

leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
Return the array answer.


Example 1:
Input: nums = [10,4,8,3]
Output: [15,1,11,22]
Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].

Example 2:
Input: nums = [1]
Output: [0]
Explanation: The array leftSum is [0] and the array rightSum is [0].
The array answer is [|0 - 0|] = [0].


Constraints:
1 <= nums.length <= 1000
1 <= nums[i] <= 105

*/

// Helper function to create left sum array
const createLeftSumArray = (arr) => {
  const leftSumArray = [0];

  for (let i = 0; i < arr.length - 1; i++) {
    const curr = arr[i];
    const prev = leftSumArray[leftSumArray.length - 1];
    leftSumArray.push(curr + prev);
  }

  return leftSumArray;
};

// Helper function to create right sum array
const createRightSumArray = (arr) => {
  const rightSumArray = [0];

  for (let i = arr.length - 1; i > 0; i--) {
    const curr = arr[i];
    const prev = rightSumArray[rightSumArray.length - 1];
    rightSumArray.push(curr + prev);
  }

  return rightSumArray.reverse();
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const leftRightDifference = (nums) => {
  // Create left and right sum arrays
  const leftSumArray = createLeftSumArray(nums);
  const rightSumArray = createRightSumArray(nums);

  // Initialize an empty array called answer
  const answer = [];

  // Iterate through all numbers in nums array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the difference between the left and right sum arrays in index i
    const difference = leftSumArray[i] - rightSumArray[i];
    // Push the absolute difference into the answer array
    answer.push(Math.abs(difference));
  }

  return answer;
};
