/*

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Constraints:
0 <= nums.length <= 105
-109 <= nums[i] <= 109

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
  if (nums.length < 2) return nums.length;

  const set = new Set(nums);
  let maxLength = 0;

  for (const num of set) {
    if (set.has(num - 1)) continue;

    let currNum = num;
    let currLength = 1;

    while (set.has(currNum + 1)) {
      currNum += 1;
      currLength += 1;
    }

    maxLength = Math.max(maxLength, currLength);
  }

  return maxLength;
};
